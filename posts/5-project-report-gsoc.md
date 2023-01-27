---
title: 'GSoC 2022 Project Report'
date: '2022-05-01'
description: "This is my project report for the 'Complete UI Rewrite of Radiology and Toolkit"
og_description: 'Google Summer of Code @ LibreHealth'
cover_image: ''
tags: 'gsoc, librehealth, open-source'
devUrl: ''
published: false
featured: false
---

# Project Abstract

During the 2018 GSoC period, web components of FHIR Resource using **Polymer.js** were written. This project is to use
those web components to completely re-write the UI of **LibreHealth Radiology** and **LibreHealth Toolkit** and make them
Open Web App modules.

The result would be a complete Open Web App with Spring Data on the backend and Polymer.js web components as
the frontend.

Discussion Thread: [Complete UI Re-Write of the Toolkit and Radiology](https://forums.librehealth.io/t/project-complete-ui-rewrite-or-radiology-and-toolkit-as-an-open-web-application/4323/59).

**Project Goals**

- Designing the wireframes using the material design philosophy.
- Converting Radiology and Toolkit to Open Web App [(following this guide)](https://wiki.openmrs.org/display/docs/Open+Web+Apps+Module).
- UI Re-Write of Radiology and Toolkit using the Polymer.js Web Components built during the 2018 GSoC.
- At the end:
  A Complete Open Web App with Spring Data as Backend and Web Components on the Frontend

# Milestones

## Get the designs ready

Before writing any code for the front-end it is best to first get the designs done and get them reviewed, so that's what I did at the starting of the Program.

Here are some of the designs that I got reviewed from the mentor:

![Patient Dashboard_Visits](https://user-images.githubusercontent.com/69139607/191218971-1305721e-d3c5-441e-b1fe-882aec179700.png)

![Navbar](https://user-images.githubusercontent.com/69139607/191218986-80a3a600-79d2-4a09-ab3f-7e3f57c7e82c.png)

![Login](https://user-images.githubusercontent.com/69139607/191218991-5e57122d-f652-4b84-9623-08babded435f.png)

> To see all the designs you can visit the [Figma Design File](https://www.figma.com/file/PmNa9wiIVpBDw7btMMtbyX/LH-Radiology-and-Toolkit-Wireframes?node-id=218%3A211)

## Understanding FHIR

My project is to rewrite the whole UI of the [lh-toolkit](https://radiology.librehealth.io) as an [Open Web App](https://github.com/openmrs/openmrs-module-owa) using the pre-existing [lh-toolkit-webcomponents](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents).

These web components are built with **Polymer.js** and follow what is called the **FHIR Standard** which is the
ultimate standard when it comes to data exchange in healthcare. My UI re-write is supposed to be compliant with this
standard. So, I figured why not write a blog about everything I learn about [FHIR](https://www.hl7.org/fhir/) Standard
so that people that come after me have a place to look for, and my understanding solidifies while writing this.

> FYI: FHIR is pronounced as Fire, weird I know but it is what it is.

So learned about that and wrote [this blog](https://rosekamal.love/blogs/7-fhir-standard)

## Addinng a Scalable Data Fetching Architecture and Implementing Patient Search

Before I go any further in the project I had to add a scalable data fetching architecture which will allow us to cache the API calls from FHIR because they can be slow sometimes.

Apart from this it also has to be very developer friendly so Redux was out of the equation.

So, I decided upon using **React Query** along side **Axios** to build this data fetching architecture.

This is how it works:

**[Merge Request](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/merge_requests/5)**

`src/api/[resourceType].ts` will contain all the custom hooks for the given resourceType which will implement the CRUD + Search of the resourceType.

This MR specifically implements `useSearchPatient()` which has `name` and `id` parameters.

This is how it can be used:

```jsx
const { isLoading, isError, data } = useSearchPatient(name, id)
```

Old UI:
![Screenshot_2022-07-15_at_10.41.53_AM](https://gitlab.com/librehealth/radiology/lh-radiology-owa/uploads/e67bea79f71c6536c2a59417426494fe/Screenshot_2022-07-15_at_10.41.53_AM.jpg)

New UI:
![Screenshot_2022-07-15_at_10.42.46_AM](https://gitlab.com/librehealth/radiology/lh-radiology-owa/uploads/0fd2e2de9322dd99242769f864c781c2/Screenshot_2022-07-15_at_10.42.46_AM.jpg)

## Implementing Patient CRUD

Once the architecture was layed out and the project was ready to be implemented the first workflow that I implemented was of the _Patient Search_ because it was the base of every other workflow from creating radiology order to adding new appointments

So, I implemented it and used the [lh-toolkit-webcomponents](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents) to do so, because they were built in prior GSoCs and were supposed to be used to build the whole UI.

![patient-crud](https://user-images.githubusercontent.com/69139607/191224194-f6c19d0a-9955-4255-a863-9f7409f4ba5a.gif)

## Doing it all over again for everythig else

So, the next steps were to implement different parts of the **lh-toolkit** in the same manner I implemented Patient CRUD.

To use the HAPI FHIR API and implement lh-toolkit, which in itself is a rabbit hole so after spending around 3 - 4 weeks I decided to move on with **lh-radiology** part.

## LibreHealth Radiology

Radiology is a crucial part of the LibreHealth projects and needs a re write too, but the [lh-toolkit-webcomponents](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents) doesn't have web components that can be used to buid these user interfaces. So, the first step in the process of UI rewrite of the Radiology was to start implementing web components for them.

Once these web components are made all I have to do is asseemble them and integrate it with the lh-toolkit API and we will have a working Radiology. I am almost finished with the web componenets and will be listed in the _Issues and Merge Requests_ section of this post.

## What's Left

Once these web components for the Radiology are implemented then what we need to do is assemble them and integrate the lh-toolkit API into it and we will have the Radiology OWA ready.

**Deliverables:**

- Assemble all the radiology webcomponents from [lh-toolkit-webcomponents](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents)
- Integrate it with the lh-toolkit API

### Issues and Merge Requests

**Issues:**

[Complete UI rewrite or radiology and toolkit as an open web application](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/issues/2)

[Add React Query and implement Patient Search](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/issues/4)

[Add Navbar and React Router + CI and CD](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/issues/5)

[Create a Patient Dashboard with a dynamic route which links to the patient Search](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/issues/6)

[Add lh-toolkit-webcomponents to the project](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/issues/7)

[Implement Update Patient and Create Patient](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/issues/8)

[Implement Appointment Search on Patient Dashboard](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/issues/9)

[[radiology] Create radiology-filter web component](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents/-/issues/119)

[[radiology] add fhir-radiology-list](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents/-/issues/120)

[Remove the existing angular app and Create a React app](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/issues/3)

**Merge Requests:**

[Remove Angular app and Create React App](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/merge_requests/4)

[Draft: Complete UI Re Write](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/merge_requests/3)

[Implemented the `/api/[resourceType].ts` data fetching using React Query](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/merge_requests/5)

[Add Navbar and React Router + CI and CD](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/merge_requests/6)

[Create a Patient Dashboard with a dynamic route which links to the patient Search](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/merge_requests/7)

[Add lh-toolkit-webcomponents and implement Patient Demographics](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/merge_requests/8)

[Implement Update Patient and Create Patient](https://gitlab.com/librehealth/radiology/lh-radiology-owa/-/merge_requests/9)

[formatting: all-packages](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents/-/merge_requests/137)

[added: fhir-radiology-filter](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents/-/merge_requests/139)

[fhir-radiology-order](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents/-/merge_requests/140)

