import sys, os, json
sys.path.insert(0, os.path.abspath('backend'))
from app import app, db
from models import Festival

with open('scripts/festivals_temp.json', 'r', encoding='utf-8') as f:
    festivals_data = json.load(f)

with app.app_context():
    print(f'Seeding {len(festivals_data)} master festivals...')
    for item in festivals_data:
        f = Festival.query.filter_by(name=item['name']).first()
        if not f:
            f = Festival(
                province_id=item['province_id'],
                name=item['name'],
                month_lunar=item['month_lunar'],
                month_solar=item['month_solar'],
                time_details=item['time_details'],
                location=item['location'],
                significance=item['significance'],
                activities=item['activities'],
                dress_code_tips=item['dress_code_tips'],
                image_url=item['image_url']
            )
            db.session.add(f)
        else:
            f.month_lunar = item['month_lunar']
            f.month_solar = item['month_solar']
            f.time_details = item['time_details']
            f.location = item['location']
            f.significance = item['significance']
            f.activities = item['activities']
            f.dress_code_tips = item['dress_code_tips']
            f.image_url = item['image_url']
    db.session.commit()
    print(f'Festival count in database now: {Festival.query.count()}')
