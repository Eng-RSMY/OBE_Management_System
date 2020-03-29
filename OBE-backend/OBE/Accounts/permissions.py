from rest_framework import permissions


class IsLoggedInUserOrAdmin(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj == request.user or request.user.is_chairman

# custom permission , to restricted data only visible to main admin


class AdminUser(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user and request.user.is_admin

    def has_object_permission(self, request, view, obj):
        return request.user and request.user.is_admin

# custom permission , to restricted data only visible to chairman


class IsChairmanUser(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user and request.user.is_chairman

    def has_object_permission(self, request, view, obj):
        return request.user and request.user.is_chairman


# custom permission , to restricted data only visible to departmentHead
class IsDepartmentHeadUser(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user and request.user.is_depHead

    def has_object_permission(self, request, view, obj):
        return request.user and request.user.is_depHead


# custom permission , to restricted data only visible to Teacher
class IsTeacherUser(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user and request.user.is_teacher

    def has_object_permission(self, request, view, obj):
        return request.user and request.user.is_teacher
