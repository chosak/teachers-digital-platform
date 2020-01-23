# -*- coding: utf-8 -*-
# Generated by Django 1.11.21 on 2019-06-25 13:18
from __future__ import unicode_literals

from django.db import migrations
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields
import wagtail.wagtailimages.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('teachers_digital_platform', '0020_activityindexpage_text_introduction'),
    ]

    operations = [
        migrations.AddField(
            model_name='activityindexpage',
            name='header_sidebar',
            field=wagtail.wagtailcore.fields.StreamField([('image', wagtail.wagtailcore.blocks.StructBlock([('image', wagtail.wagtailimages.blocks.ImageChooserBlock(help_text='Should be exactly 390px tall, and up to 940px wide, unless this is an overlay or bleeding style hero.')), ('small_image', wagtail.wagtailimages.blocks.ImageChooserBlock(help_text='Provide an alternate image for small displays when using a bleeding or overlay hero.', required=False))]))], blank=True),
        ),
        migrations.AlterField(
            model_name='activityindexpage',
            name='header',
            field=wagtail.wagtailcore.fields.StreamField([('text_introduction', wagtail.wagtailcore.blocks.StructBlock([('eyebrow', wagtail.wagtailcore.blocks.CharBlock(help_text='Optional: Adds an H5 eyebrow above H1 heading text. Only use in conjunction with heading.', label='Pre-heading', required=False)), ('heading', wagtail.wagtailcore.blocks.CharBlock(required=False)), ('intro', wagtail.wagtailcore.blocks.RichTextBlock(required=False)), ('body', wagtail.wagtailcore.blocks.RichTextBlock(required=False)), ('links', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock([('text', wagtail.wagtailcore.blocks.CharBlock(required=False)), ('url', wagtail.wagtailcore.blocks.CharBlock(default='/', required=False))]), required=False)), ('has_rule', wagtail.wagtailcore.blocks.BooleanBlock(help_text='Check this to add a horizontal rule line to bottom of text introduction.', label='Has bottom rule', required=False))])), ('notification', wagtail.wagtailcore.blocks.StructBlock([('message', wagtail.wagtailcore.blocks.CharBlock(help_text='The main notification message to display.', required=True)), ('explanation', wagtail.wagtailcore.blocks.TextBlock(help_text='Explanation text appears below the message in smaller type.', required=False)), ('links', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock([('text', wagtail.wagtailcore.blocks.CharBlock(required=False)), ('url', wagtail.wagtailcore.blocks.CharBlock(default='/', required=False))]), help_text='Links appear on their own lines below the explanation.', required=False))]))], blank=True),
        ),
    ]