import urllib.request
import json

base = 'http://localhost:4000/api'
def check(url, name):
    try:
        req = urllib.request.urlopen(url)
        data = json.loads(req.read().decode('utf-8'))
        count = data.get('count', data.get('total', 'OK'))
        print(f"✅ {name}: status={data.get('status')} | count={count}")
    except Exception as e:
        print(f"❌ {name} failed: {e}")

check(f'{base}/provinces/phutho', 'Province Detail (Phú Thọ)')
check(f'{base}/destinations?province_id=phutho', 'Destinations in Phú Thọ')
check(f'{base}/cuisine?region=North', 'Cuisine in North')
check(f'{base}/festivals?month_solar=4', 'Festivals in Month 4 (Solar)')
check(f'{base}/costs/danang', 'Cost Guidelines for Đà Nẵng')

