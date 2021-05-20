import json
from datetime import datetime

current_date = datetime.today().strftime('%Y-%m-%d')


def get_sitemap_url(url):
    return f'<url><loc>{url}</loc><lastmod>{current_date}</lastmod></url>'


districts = []
sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

with open('districts-copy.json', 'r') as f:
    districts = json.load(f)


for d in districts:
    url = f'https://co-vac.messengerx.io/vaccines/india/{d["district_name"]}/{d["district_id"]}'
    sitemap += get_sitemap_url(url)

sitemap += '</urlset>'

with open('public/sitemap.xml', 'w') as f:
    f.write(sitemap)
