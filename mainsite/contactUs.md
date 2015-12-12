---
layout: default
title: Contact Us
id: Contact Us
permalink: /contactUs/
weight: 4
---

<form action=" " class="contact-form">
    <label for="name">Your Name</label>
    <br />
    <input type="text" id="name" class="form-el form-txt-box">
    <br />

    <label for="email">Your e-mail address</label>
    <br />
    <input type="text" id="email" class="form-el form-txt-box">
    <br />

    <label for="subject">Subject</label>
    <br />
    <input type="text" id="subject" class="form-el form-txt-box">
    <br />

    <label for="category">Category</label>
    <br />
    <select id="category" class="form-el form-select-box">
        <option value="general-enquiries" selected>General Enquiries</option>
        <option value="design-issues">Design Issues</option>
        <option value="moderators">Moderators</option>
        <option value="support">Support</option>
        <option value="technical-issues">Technical Issues</option>
        <option value="volunteer">Volunteer</option>
        <option value="website-feedback">Website Feedback</option>
    </select>
    <br />

    <label for="message">Message</label>
    <textarea cols="4" id="message" class="form-el form-txt-area">

    </textarea>
    <br />

    <input type="submit" id="submit" value="Send Message">
</form>
