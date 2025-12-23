from PIL import Image, ImageDraw, ImageFont
import os

# Image dimensions and creation
images = {
    'lighting-card.jpg': (800, 600, 'Lighting Solutions', (255, 193, 7)),
    'switches-card.jpg': (800, 600, 'Switches & Automation', (255, 193, 7)),
    'about-image.jpg': (600, 600, 'Interior Lighting', (255, 193, 7)),
    'project-luxury-hotel.jpg': (1200, 400, 'Luxury Hotel Lobby', (255, 193, 7)),
    'project-corporate-office.jpg': (800, 600, 'Corporate Office', (255, 193, 7)),
    'project-smart-home.jpg': (800, 600, 'Smart Home', (255, 193, 7)),
}

for filename, (width, height, text, accent_color) in images.items():
    # Create image with gradient-like effect
    img = Image.new('RGB', (width, height), color=(20, 20, 20))
    draw = ImageDraw.Draw(img)
    
    # Add subtle gradient by drawing rectangles
    for y in range(height):
        opacity = int(40 * (y / height))
        draw.line([(0, y), (width, y)], fill=(30+opacity, 30+opacity, 30+opacity))
    
    # Add accent color elements
    draw.rectangle([(0, 0), (width, 10)], fill=accent_color)
    
    # Add text (use default font since we don't have specific fonts)
    try:
        # Try to use a larger font if available
        font_size = max(20, height // 20)
        draw.text((width//2, height//2), text, fill=(200, 200, 200), anchor="mm")
    except:
        draw.text((width//2, height//2), text, fill=(200, 200, 200))
    
    img.save(filename, 'JPEG', quality=85)
    print(f"Created {filename}")

print("All placeholder images created!")
