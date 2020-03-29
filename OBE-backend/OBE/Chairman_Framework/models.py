from django.db import models
from Accounts.models import User
from taggit.managers import TaggableManager
# Create your models here.

# peo entered by department


class PEO(models.Model):
    code = models.CharField(max_length=500)
    description = models.CharField(max_length=500)

    owner = models.ForeignKey(
        User, related_name="peo", on_delete=models.CASCADE, null=True)

# vision of department entered by chairman


class Vision(models.Model):
    vision = models.CharField(max_length=500)
    owner = models.ForeignKey(
        User, related_name="vision", on_delete=models.CASCADE, null=True)
    peos = models.ManyToManyField(PEO, related_name="peo")


# mission of department entered by chairman
class Mission(models.Model):
    mission = models.CharField(max_length=500)
    owner = models.ForeignKey(
        User, related_name="mission", on_delete=models.CASCADE, null=True)
    peos = models.ManyToManyField(PEO)


# plo
class PLO(models.Model):
    code = models.CharField(max_length=500)
    description = models.CharField(max_length=500)
    owner = models.ForeignKey(
        User, related_name="plo", on_delete=models.CASCADE, null=True)
    peos = models.ManyToManyField(PEO)


# cognitive domain


class Cognitive_Domain(models.Model):
    code = models.CharField(max_length=500)
    definition = models.CharField(max_length=500)
    verbs = TaggableManager(blank=True)
    owner = models.ForeignKey(
        User, related_name="cognitive", on_delete=models.CASCADE, null=True)

# psychomotor domain


class Psychomotor_Domain(models.Model):
    code = models.CharField(max_length=500)
    definition = models.CharField(max_length=500)
    verbs = TaggableManager(blank=True)
    owner = models.ForeignKey(
        User, related_name="psychomotor", on_delete=models.CASCADE, null=True)

# Affective Domain


class Affective_Domain(models.Model):
    code = models.CharField(max_length=500)
    definition = models.CharField(max_length=500)
    verbs = TaggableManager(blank=True)
    owner = models.ForeignKey(
        User, related_name="affective", on_delete=models.CASCADE, null=True)

# mapping of plo to clo


class CLO(models.Model):
    code = models.CharField(max_length=500)
    description = models.CharField(max_length=500)
    verb = models.CharField(max_length=500, null=True)
    owner = models.ForeignKey(
        User, related_name="clo", on_delete=models.CASCADE, null=True)
    plos = models.ManyToManyField(PLO)
    cognitives = models.ManyToManyField(Cognitive_Domain, blank=True)
    psychomotors = models.ManyToManyField(Psychomotor_Domain, blank=True)
    affectives = models.ManyToManyField(Affective_Domain, blank=True)


# courses mapping to clos


class Courses(models.Model):
    year = models.CharField(max_length=500)
    calendar_year = models.CharField(max_length=500)
    code = models.CharField(max_length=500)
    tittle = models.CharField(max_length=500)
    owner = models.ForeignKey(
        User, related_name="courses", on_delete=models.CASCADE, null=True)
    clos = models.ManyToManyField(CLO)
