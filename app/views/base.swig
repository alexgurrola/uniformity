{% extends 'empty.swig' %}

{% block meta %}{% parent %}
	<base href="/">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{% endblock %}

{% block css %}{% parent %}
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
	<link rel="stylesheet" type="text/css" href="https://material.angularjs.org/latest/angular-material.min.css">
	<link rel="stylesheet" type="text/css" href="/site/css/common.css">
{% endblock %}

{% block javascript %}{% parent %}
	<script data-main="site/js/requireConfig" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.2.0/require.min.js"></script>
{% endblock %}

{% block title %}Uniformity{% endblock %}

