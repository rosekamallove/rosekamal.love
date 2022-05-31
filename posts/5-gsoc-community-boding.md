---
title: "My goals for GSoC 22' Community Bonding Period (LibreHealthIO)"
date: '2022-05-26'
description: "Getting to know the community and familiarizing myself with LibreHealht's codebase and their working style."
og_description: "Getting to know the community and familiarizing myself with LibreHealht's codebase and their working style."
cover_image: 'https://user-images.githubusercontent.com/69139607/170450651-bfe6ef15-5634-473d-908f-d95dab890113.png'
tags: 'gsoc, librehealth, open-source'
devUrl: ''
published: true
---

I have been selected as an _Open Source Contributor_ for [LibreHealthIO](https://librehealth.io) under the [Google Summer
of Code Program](https://summerofcode.withgoogle.com) and I am extremely excited to work with the amazing mentors that are assigned to mentor me for the
the project, [Complete UI Re-Write of the Toolkit and Radiology](https://forums.librehealth.io/t/project-complete-ui-rewrite-or-radiology-and-toolkit-as-an-open-web-application/4323/59).

## My Project

During the 2018 GSoC period, web components of FHIR Resource using **Polymer.js** were written. This project is to use
those web components to completely re-write the UI of **LibreHealth Radiology** and **LibreHealth Toolkit** and make them
Open Web App modules.

The result would be a complete Open Web App with Spring Data on the backend and Polymer.js web components as
the frontend.

Discussion Thread: [Complete UI Re-Write of the Toolkit and Radiology](https://forums.librehealth.io/t/project-complete-ui-rewrite-or-radiology-and-toolkit-as-an-open-web-application/4323/59).

### Community Bonding Period [May 21st to June 13th]

> The period of time between when accepted GSoC contributors are announced and the time they are expected to start coding.
> This time is an excellent one to introduce your GSoC contributors to the community, get them on the right mailing
> lists, introduce them to the codebase and discuss how they will work with their mentors on their timeline for the
> program, etc.

The community bonding period has already started (started 6 days ago), I haven't been able to participate in
the community because I have been involved in some personal issues. I was having my exams during the time the projects
got announced, so was involved in them for a couple of days after the projects were announced. But then on the last day of my
exams, I got the news that **my grandpa died** 😔. I was devastated. Then, got involved in all the rituals surrounding the death of a
family member in India.

I am now over all of that and can finally start participating in the community and get to know fellow open source
contributors, understand the different time zones/communication mediums for the mentors.

I had already planned out my **Community Bonding Period** back when I was writing the proposal for the project, and I am
going to strictly stick to that only.

### My Targets for This Period

I have divided this period into two parts, one for the first week of the remaining days and the next for the second week
of the remaining days.

**Part 1 (May 26 to June 2)**

Since I have never actually used the **Toolkit** or the **Radiology**, (me not being in the medical field) I will
start by **understanding the workflows** that are present in the application.

And while I am at it it would make a lot of sense if I create these workflows in the form of charts using
the [Lucid Charts](https://www.lucidchart.com/pages/landing?utm_source=google&utm_medium=cpc&utm_campaign=branded_sitelink_en_lucidchart&km_CPC_CampaignId=1484560207&km_CPC_AdGroupID=60168114191&km_CPC_Keyword=lucid%20charts&km_CPC_MatchType=e&km_CPC_ExtensionID=21193716975&km_CPC_Network=g&km_CPC_AdPosition=&km_CPC_Creative=442433234360&km_CPC_TargetID=aud-536921399221:kwd-64262996435&km_CPC_Country=9302050&km_CPC_Device=c&km_CPC_placement=&km_CPC_target=&gclid=CjwKCAjwyryUBhBSEiwAGN5OCI4NStq17xA2UmsfNMW1J-MvNR5Q59Iu5u5LKdWVWJc9ilEYn77A-BoCEAgQAvD_BwE)
Web app.

Once I get a good understanding of how a potential user uses the Toolkit and Radiology I will start **exploring the codebase**
and get an idea of how the style of the code and the basic flow of the codebase. I will also try to change a few things and
see if it causes any errors or something to solidify my understanding of the codebase.

One good way to get a good grasp of the codebase is to work on some issues on the project, so I will try to shortlist
some issues and start working on them. The deliverables for this would be that I get a couple of MRs merged at
least and get a good understanding of the codebase

**Part 2 (June 2 to June 12)**

Now that I have a good understanding of the user side of the project (the user workflows I have created using [Lucid Charts](https://www.lucidchart.com/pages/landing?utm_source=google&utm_medium=cpc&utm_campaign=branded_sitelink_en_lucidchart&km_CPC_CampaignId=1484560207&km_CPC_AdGroupID=60168114191&km_CPC_Keyword=lucid%20charts&km_CPC_MatchType=e&km_CPC_ExtensionID=21193716975&km_CPC_Network=g&km_CPC_AdPosition=&km_CPC_Creative=442433234360&km_CPC_TargetID=aud-536921399221:kwd-64262996435&km_CPC_Country=9302050&km_CPC_Device=c&km_CPC_placement=&km_CPC_target=&gclid=CjwKCAjwyryUBhBSEiwAGN5OCI4NStq17xA2UmsfNMW1J-MvNR5Q59Iu5u5LKdWVWJc9ilEYn77A-BoCEAgQAvD_BwE))
as well as the developer side of the project (the codebase). I can now start working on the designs for all the pages
of the projects.

I have already created wireframes for most of the pages when I was writing the proposal, but they are just wireframes
and lack a lot of details. I will start **implementing full fledged designs** which will follow the [Material Design](https://material.io/design) philosophy
and will be implemented using the [Material Web Components](https://github.com/material-components/material-web)

After each section of the project, I will get feedback from the mentors and community members and incorporate the
feedbacks immediately.

### Deliverables

So, by the end of the community bonding period:

- I will be having a good understanding of the project's UI workflows as well as the code workflows.
- I would have created a couple of MRs at least.
- I will be done with detailed designs of all the pages present in **Toolkit** and **Radiology** which would
  have been revised too on the bases of the feedback I get from the community and the mentors.
