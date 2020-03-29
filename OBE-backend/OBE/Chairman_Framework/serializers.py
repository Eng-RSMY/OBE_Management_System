from rest_framework import serializers
from .models import PEO, Vision, Mission, PLO, CLO, Courses, Cognitive_Domain, Psychomotor_Domain, Affective_Domain
from taggit.models import Tag
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)
import six

# peo


class PEOSerializer(serializers.ModelSerializer):
    class Meta:
        model = PEO
        fields = '__all__'


# vision


class VisionSerializer(serializers.ModelSerializer):
   # peos = serializers.SerializerMethodField(read_only=True)
    """
    peos = serializers.PrimaryKeyRelatedField(
        many=True, queryset=PEO.objects.all())
   # peos = serializers.SerializerMethodField()
    """
    class Meta:
        model = Vision
        fields = ('id', 'vision', 'peos')

    def to_representation(self, instance):
        self.fields['peos'] = PEOSerializer(read_only=True, many=True)
        return super(VisionSerializer, self).to_representation(instance)

    """
    def get_peos(self, peos):
        new_peo = []
        tags = peos.peo.all()
        for tag in tags:
            new_peo.append(tag.code)
        return new_peo
    """

# mission serilaizer


class MissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mission
        fields = '__all__'

    def to_representation(self, instance):
        self.fields['peos'] = PEOSerializer(read_only=True, many=True)
        return super(MissionSerializer, self).to_representation(instance)

# plo serilaizer


class PLOSerializer(serializers.ModelSerializer):

    class Meta:
        model = PLO
        fields = '__all__'

    def to_representation(self, instance):
        self.fields['peos'] = PEOSerializer(read_only=True, many=True)
        return super(PLOSerializer, self).to_representation(instance)

# clo serilaizer


class CLOSerializer(serializers.ModelSerializer):
    full_discription = serializers.SerializerMethodField()

    class Meta:
        model = CLO
        fields = ('id', 'code', 'description', 'verb', 'full_discription', 'owner', 'plos', 'cognitives',
                  'affectives', 'psychomotors')

    def to_representation(self, instance):
        self.fields['plos'] = PLOSerializer(read_only=True, many=True)

        self.fields['cognitives'] = CognitiveSerializer(
            read_only=True, many=True)
        self.fields['psychomotors'] = PsychomotorSerializer(
            read_only=True, many=True)
        self.fields['affectives'] = AffectiveSerializer(
            read_only=True, many=True)
        return super(CLOSerializer, self).to_representation(instance)

# to combine code and description for a single full discription , note : this full dscription is not saving in database
    def get_full_discription(self, obj):
        return '{} {} {}'.format(obj.code, obj.verb, obj.description)

# courses serilaizer


class CoursesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Courses
        fields = '__all__'

    def to_representation(self, instance):
        self.fields['clos'] = CLOSerializer(read_only=True, many=True)
        return super(CoursesSerializer, self).to_representation(instance)

# cognitive domain


class NewTagListSerializerField(TagListSerializerField):
    def to_internal_value(self, value):
        if isinstance(value, six.string_types):
            value = value.split(',')

        if not isinstance(value, list):
            self.fail('not_a_list', input_type=type(value).__name__)

        for s in value:
            if not isinstance(s, six.string_types):
                self.fail('not_a_str')

            self.child.run_validation(s)
        return value


class CognitiveSerializer(TaggitSerializer, serializers.ModelSerializer):
    verbs = NewTagListSerializerField()

    class Meta:
        model = Cognitive_Domain
        fields = ('id', 'code', 'definition', 'verbs')


class PsychomotorSerializer(TaggitSerializer, serializers.ModelSerializer):
    verbs = NewTagListSerializerField()

    class Meta:
        model = Psychomotor_Domain
        fields = ('id', 'code', 'definition', 'verbs')


class AffectiveSerializer(TaggitSerializer, serializers.ModelSerializer):
    verbs = NewTagListSerializerField()

    class Meta:
        model = Affective_Domain
        fields = ('id', 'code', 'definition', 'verbs')
