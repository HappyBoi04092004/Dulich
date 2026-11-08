import json
import os
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Province, TouristDestination, Cuisine, Festival, CostGuideline

tourism_bp = Blueprint('tourism', __name__)

def is_admin_user():
    """Helper to check if current JWT user has admin role."""
    try:
        user_id = get_jwt_identity()
        if not user_id:
            return False
        user = User.query.get(int(user_id))
        return user is not None and user.role == 'admin'
    except Exception:
        return False


# ==============================================================================
# PROVINCES ENDPOINTS
# ==============================================================================

@tourism_bp.route('/provinces', methods=['GET'])
def get_provinces():
    """Get list of 34 consolidated provinces of Vietnam."""
    region = request.args.get('region')
    search = request.args.get('q', '').strip().lower()

    query = Province.query

    if region and region in ['North', 'Central', 'South']:
        query = query.filter_by(region=region)

    provinces = query.order_by(Province.name.asc()).all()

    if search:
        provinces = [p for p in provinces if search in p.name.lower() or (p.merged_from and search in p.merged_from.lower())]

    return jsonify({
        'status': 'success',
        'count': len(provinces),
        'data': [p.to_dict() for p in provinces]
    })


@tourism_bp.route('/provinces/<province_id>', methods=['GET'])
def get_province_detail(province_id):
    """Get complete province details including destinations, cuisine, and festivals."""
    province = Province.query.get(province_id)
    if not province:
        return jsonify({'error': 'Province not found'}), 404

    return jsonify({
        'status': 'success',
        'data': province.to_dict(include_relations=True)
    })


# ==============================================================================
# DESTINATIONS ENDPOINTS
# ==============================================================================

@tourism_bp.route('/destinations', methods=['GET'])
def get_destinations():
    """Get tourist destinations filtered by province, category, search."""
    province_id = request.args.get('province_id')
    category = request.args.get('category')
    search = request.args.get('q', '').strip().lower()
    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 50))

    query = TouristDestination.query

    if province_id:
        query = query.filter_by(province_id=province_id)
    if category:
        query = query.filter_by(category=category)

    destinations = query.order_by(TouristDestination.rating.desc()).all()

    if search:
        destinations = [d for d in destinations if search in d.name.lower() or (d.description and search in d.description.lower()) or (d.highlights and search in d.highlights.lower())]

    total_count = len(destinations)
    start_idx = (page - 1) * limit
    paginated = destinations[start_idx:start_idx + limit]

    return jsonify({
        'status': 'success',
        'total': total_count,
        'page': page,
        'limit': limit,
        'data': [d.to_dict() for d in paginated]
    })


@tourism_bp.route('/destinations/<destination_id>', methods=['GET'])
def get_destination_detail(destination_id):
    """Get single destination detail."""
    dest = TouristDestination.query.get(destination_id)
    if not dest:
        return jsonify({'error': 'Destination not found'}), 404

    return jsonify({
        'status': 'success',
        'data': dest.to_dict()
    })


# ==============================================================================
# CUISINE & FOOD ENDPOINTS
# ==============================================================================

@tourism_bp.route('/cuisine', methods=['GET'])
def get_cuisines():
    """Get authentic cuisines, specialties & 5-star Google Maps spots."""
    province_id = request.args.get('province_id')
    dish_type = request.args.get('dish_type')
    region = request.args.get('region')
    is_gift = request.args.get('is_gift')
    search = request.args.get('q', '').strip().lower()

    query = Cuisine.query.join(Province)

    if province_id:
        query = query.filter(Cuisine.province_id == province_id)
    if dish_type:
        query = query.filter(Cuisine.dish_type == dish_type)
    if region in ['North', 'Central', 'South']:
        query = query.filter(Province.region == region)
    if is_gift is not None:
        val = is_gift.lower() in ['true', '1']
        query = query.filter(Cuisine.is_gift_suitable == val)

    items = query.all()

    if search:
        items = [c for c in items if search in c.name.lower() or (c.description and search in c.description.lower()) or search in c.province.name.lower()]

    return jsonify({
        'status': 'success',
        'count': len(items),
        'data': [c.to_dict() for c in items]
    })


# ==============================================================================
# FESTIVALS ENDPOINTS
# ==============================================================================

@tourism_bp.route('/festivals', methods=['GET'])
def get_festivals():
    """Get traditional festivals filtered by month, province, or search."""
    month_solar = request.args.get('month_solar', type=int)
    month_lunar = request.args.get('month_lunar', type=int)
    province_id = request.args.get('province_id')
    search = request.args.get('q', '').strip().lower()

    query = Festival.query.join(Province)

    if province_id:
        query = query.filter(Festival.province_id == province_id)
    if month_solar and 1 <= month_solar <= 12:
        query = query.filter(Festival.month_solar == month_solar)
    if month_lunar and 1 <= month_lunar <= 12:
        query = query.filter(Festival.month_lunar == month_lunar)

    festivals = query.order_by(Festival.month_solar.asc()).all()

    if search:
        festivals = [f for f in festivals if search in f.name.lower() or (f.significance and search in f.significance.lower()) or search in f.province.name.lower()]

    return jsonify({
        'status': 'success',
        'count': len(festivals),
        'data': [f.to_dict() for f in festivals]
    })


# ==============================================================================
# COST & BUDGET GUIDELINES ENDPOINT
# ==============================================================================

@tourism_bp.route('/costs/<province_id>', methods=['GET'])
def get_province_costs(province_id):
    """Get budget guidelines and average costs for a province."""
    guideline = CostGuideline.query.filter_by(province_id=province_id).first()
    if not guideline:
        # Fallback to default national average
        return jsonify({
            'status': 'success',
            'data': {
                'province_id': province_id,
                'daily_budget_economy': 550000,
                'daily_budget_standard': 1200000,
                'daily_budget_luxury': 3200000,
                'hotel_avg_economy': 350000,
                'hotel_avg_standard': 850000,
                'hotel_avg_luxury': 2500000,
                'meal_avg_per_day': 250000,
                'transport_local_avg': 150000
            }
        })

    return jsonify({
        'status': 'success',
        'data': guideline.to_dict()
    })


# ==============================================================================
# ADMIN DASHBOARD & MANAGEMENT ENDPOINTS
# ==============================================================================

@tourism_bp.route('/admin/stats', methods=['GET'])
@jwt_required()
def get_admin_stats():
    """Get platform overview statistics."""
    if not is_admin_user():
        return jsonify({'error': 'Admin authorization required'}), 403

    from models import SavedTrip

    return jsonify({
        'status': 'success',
        'stats': {
            'provinces_count': Province.query.count(),
            'destinations_count': TouristDestination.query.count(),
            'cuisines_count': Cuisine.query.count(),
            'festivals_count': Festival.query.count(),
            'users_count': User.query.count(),
            'saved_trips_count': SavedTrip.query.count()
        }
    })


@tourism_bp.route('/admin/destinations', methods=['POST'])
@jwt_required()
def create_destination():
    """Admin creates a new tourist destination."""
    if not is_admin_user():
        return jsonify({'error': 'Admin authorization required'}), 403

    data = request.get_json() or {}
    name = data.get('name', '').strip()
    province_id = data.get('province_id')
    if not name or not province_id:
        return jsonify({'error': 'Name and province_id are required'}), 400

    dest_id = data.get('id') or f"{province_id}-{len(name)}-{TouristDestination.query.count() + 1}"
    
    new_dest = TouristDestination(
        id=dest_id,
        province_id=province_id,
        name=name,
        category=data.get('category', 'scenery'),
        category_name=data.get('category_name', 'Danh lam thắng cảnh'),
        lat=float(data.get('lat', 21.0)),
        lng=float(data.get('lng', 105.0)),
        address=data.get('address', ''),
        image_url=data.get('image_url', ''),
        description=data.get('description', ''),
        history_details=data.get('history_details', ''),
        highlights=data.get('highlights', ''),
        opening_hours=data.get('opening_hours', '07:00 - 18:00'),
        ticket_price=data.get('ticket_price', 'Miễn phí'),
        estimated_duration=data.get('estimated_duration', '2 - 3 giờ'),
        suitable_for=data.get('suitable_for', 'Mọi đối tượng'),
        rating=float(data.get('rating', 4.9)),
        review_count=int(data.get('review_count', 100))
    )
    db.session.add(new_dest)
    db.session.commit()

    return jsonify({'status': 'success', 'data': new_dest.to_dict()}), 201


@tourism_bp.route('/admin/destinations/<destination_id>', methods=['DELETE'])
@jwt_required()
def delete_destination(destination_id):
    """Admin deletes a tourist destination."""
    if not is_admin_user():
        return jsonify({'error': 'Admin authorization required'}), 403

    dest = TouristDestination.query.get(destination_id)
    if not dest:
        return jsonify({'error': 'Destination not found'}), 404

    db.session.delete(dest)
    db.session.commit()
    return jsonify({'status': 'success', 'message': f'Destination {destination_id} deleted'})


@tourism_bp.route('/admin/logs', methods=['GET'])
@jwt_required()
def get_system_logs():
    """Admin reads recent lines from runtime log files."""
    if not is_admin_user():
        return jsonify({'error': 'Admin authorization required'}), 403

    logs_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'logs'))
    backend_log = os.path.join(logs_dir, 'backend_runtime.log')
    client_log = os.path.join(logs_dir, 'frontend_client.log')
    system_log = os.path.join(logs_dir, 'system_tests.log')

    def read_tail(filepath, max_lines=60):
        if not os.path.exists(filepath):
            return []
        try:
            with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
                lines = f.readlines()
                return [line.strip() for line in lines[-max_lines:]]
        except Exception as e:
            return [f"Error reading log: {str(e)}"]

    return jsonify({
        'status': 'success',
        'logs': {
            'backend': read_tail(backend_log),
            'frontend': read_tail(client_log),
            'system_tests': read_tail(system_log)
        }
    })
