@component('mail::message')
# Introduction

Reminder for the Appointment

@component('mail::button', ['url' => 'http://127.0.0.1:8000/home'])
Go To HealthCare
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
