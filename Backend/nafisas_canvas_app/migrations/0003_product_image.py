# Generated by Django 4.2.7 on 2023-12-26 15:58

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("nafisas_canvas_app", "0002_cart_category_order_product_created_at_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="product_images/"),
        ),
    ]