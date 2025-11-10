from django import forms

class CommentForm(forms.Form):
    name = forms.CharField(max_length=120, label="")
    email = forms.EmailField(label="")
    body = forms.CharField(widget=forms.Textarea(attrs={"rows": 4}), label="")
