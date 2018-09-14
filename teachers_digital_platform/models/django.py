# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from django.db import models

from wagtail.wagtailadmin.edit_handlers import FieldPanel

from mptt.models import MPTTModel, TreeForeignKey, TreeManyToManyField

class BaseActivityTaxonomy(models.Model):
    """ A base class for all activity snippets"""
    title = models.CharField(max_length=255, unique=True)
    weight = models.IntegerField(default=0)

    panels = [
        FieldPanel('title'),
        FieldPanel('weight'),
    ]

    def __str__(self):
        return self.title

    class Meta:
        abstract = True
        ordering = ['weight', 'title']


class ActivityBuildingBlock(BaseActivityTaxonomy):
    options = (
        ('settings', 'Executive function'),
        ('split', 'Financial habits and norms'),
        ('piggy-bank-check', 'Financial knowledge and decision making'),
    )
    svg_icon = models.CharField(
        null=True,
        blank=True,
        max_length=60,
        choices=options,
    )

    panels = BaseActivityTaxonomy.panels + [
        FieldPanel('svg_icon'),
    ]


class ActivitySchoolSubject(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityTopic(MPTTModel):
    title = models.CharField(max_length=255, unique=True)
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
    weight = models.IntegerField(default=0)

    class MPTTMeta:
        order_insertion_by = ['weight', 'title']

    panels = [
        FieldPanel('title'),
        FieldPanel('parent'),
        FieldPanel('weight')
    ]

    def __str__(self):
        return self.title


class ActivityGradeLevel(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityAgeRange(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityStudentCharacteristics(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityType(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityTeachingStrategy(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityBloomsTaxonomyLevel(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityDuration(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityJumpStartCoalition(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels


class ActivityCouncilForEconEd(BaseActivityTaxonomy):
    panels = BaseActivityTaxonomy.panels