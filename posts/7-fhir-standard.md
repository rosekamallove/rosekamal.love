---
title: 'The FHIR Standard for data exchange in healthcare'
date: '2022-06-14'
description: "A newbie's perspective on what FHIR is and how is it helpful"
og_description: "A newbie's perspective on what FHIR is and how is it helpful"
cover_image: 'https://user-images.githubusercontent.com/69139607/170450651-bfe6ef15-5634-473d-908f-d95dab890113.png'
tags: 'gsoc, librehealth, open-source, fhir'
devUrl: ''
published: false
---

I have recently been accepted as an open source contributor for [LibreHealthIO](https://librehealth.io) under the
[Google Summer of Code](https://summerofcode.withgoogle.com) Program and my project for this summer is rewrite the
whole UI of the [lh-toolkit](https://radiology.librehealth.io) as an [Open Web App](https://github.com/openmrs/openmrs-module-owa)
using the pre-existing [lh-toolkit-webcomponents](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents).

These web components are built with **Polymer.js** and follow what is called the **FHIR Standard** which is the
ultimate standard when it comes to data exchange in healthcare. My UI re-write is supposed to be compliant with this
standard. So, I figured why not write a blog about everything I learn about [FHIR](https://www.hl7.org/fhir/) Standard
so that people that come after me have a place to look for, and my understanding solidifies while writing this.

> FYI: FHIR is pronounced as Fire, weird I know but it is what it is.

Checkout [Intro to FHIR](https://www.youtube.com/watch?v=YbQcJj1GqH0)

## Before FHIR and what led to its creations

In the ancient times (the 2000s) it was very hard to have applications that we take for granted today, IE5 was the explorer that
people used back then. Developers back then had to solve really basic problems to even do things as basic as creating a
web portal that links two hospitals' data together and shows it on a web page.

Getting access to data, designing asynchronous web applications, and reloading the web page when new data comes in,
we're really crazy problems for developers back then. Think of writing a frontend for **IE5** that updates with the data,
yeah we do take a lot of things for granted that developers in the early 2000s had to do themselves.

The technology that the developer from the 2000s used as a protocol known as **HL7 V2**, is a bit hard to understand
but once you are used to it, HL7 V2 really makes it a lot easier to quickly scan the data and tell what's it trying to tell
you. It was _very dense_ so allows for a lot of information in smaller transfers.

**This is what a typical _HL7 V2_ payload looked like:**

![HL7 V2 Payload](https://user-images.githubusercontent.com/69139607/173615554-dcf4d59c-bcb6-4668-ac07-63ab50bd8c80.jpg)

I know this looks hilarious, but isn't building web apps for **IE5** hilarious in itself? Even though this looks very
old fashioned (because it is) but it really was a groundbreaking technology because it allowed for web apps to be built
which could dynamic, asynchronously querying a bunch of backend systems using these v2 queries and dynamically updating
itself when new data comes in.

> Me thinking about `useEffect` while writing this 😆

After the **HL7 V2** there was a large effort to replace it with something more modern than something that was built in
the 90s. That led to the creation of a protocol known as the **HL7 V3**.

**This here is an example of HL7 V3's XML Payload**

![HL7 V3 Payload](https://user-images.githubusercontent.com/69139607/173617674-66a9fce8-b81b-4b43-b973-7b0fedd44d9f.jpg)

Even though this was a great effort with some really good ideas in it, it utterly failed to attract any kind of mind
share. The main reason that I found it on the internet is that it was too complex and intense to understand and the make
something useful out of it. So it never really managed to take off as a useful standard.

> **Basic Technology as a Barrier**
>
> Basic concepts of getting data out of EHRs and agreeing on formats across jurisdictions were completely preventing large
> scale interop.

A lot of amazing things were done using the **HL7 V2** and **V1** but at the same time a lot of amazing things were not
done, just because the technology hadn't caught up, it really wasn't usable by modern approaches to build applications,
things like building apps that work on your phone and tablet, or work across slow distributed mobile networks, there are
all kinds of barriers there.

All of this leads to the creation of 🔥 HL7 FHIR\*\*.

FHIR was created as a response to these old technologies, as a
fresh attempt to build standards that could meet modern needs for interoperability and most importantly that it
would be picked up by people who needed to build technology to solve healthcare problems so **let's dive in**.

## Introduction 🔥 HL7 FHIR

> I still can't get over FHIR being pronounced as fire 😆

**F**ast **H**ealthcare **I**nteroperablity **R**esources the _H_ and the _I_ are fundamentally what they wanted to build. So, no question about why they chose those two letters.

They chose the word _fast_ kind of deliberately, and fast in this context doesn't mean that the data exchange in itself is fast. The idea behind it are that it is _fast to adopt_ which translates to, you don't need tonnes of experience, PHDs or anything like that to get started with the **FHIR Standard**

It is intended to be a standard that you can pick up, quickly learn, and very quickly become productive as well as proficient in. And I gotta say, they have succeeded in making it fast.

The work **resources** comes from the **HTTP spec**, the language that they (HTTP) use describes the entire _world wide web_ in terms of **addressable resources**.

For example, you go to google and type in your query term in the form input, and then you pull down a page with a bunch of search results on it, what you have actually done is you have downloaded a resource, that _resource_, in this case, is _search results_.

> The HTTP spec describes the entire web in terms of these adressable , fetchable, resources.
> FHIR is taking all of that context and applying it to Health Care

**Hl7** is a standards development organization and **FHIR** is a standard. _(V2 and CDA are also separate standards)_

Just a heads up almost none of the actual work of standards development happens by **HL7** the corporate entity, what it brings to the table is a process and a governance framework and they organize events, the standard itself is created by volunteers who are spread entirely around the globe.

The amazing stuff, all of it is **free and open source**, this is honestly is great.

## So, What is FHIR?

**FHIR** is a free and open source standard for health interoperability, based on modern approaches. It consists of **five things**

1. A robust **data model** for describing health and administrative data

2. A **RESTful API** for interacting with the data using either JSON or XML

3. A set of **open source tools** to implement and test FHIR applications

4. A collection of **FHIR Servers** around the world that you can interact with

5. A **community** of implementers working together

> FHIR also has its own free and open source implementation of the standards in the **Java** programming language.
> But if you're not a Java developer, there are open source libraries of excellent quality in all kinds of other languages as well.

## The FHIR Manifesto

One of the primary aims of FHIR was to not repeat the mistakes of the past, and a lot of that led to the creat of **The FHIR Manifesto** which is a set of guiding principles that was key in terms of decision-making, in order to create and maintain a standard that can be implemented quickly.

Here are a few points from that manifesto

### Implementer Focus

This sounds trivial I know, a, of course, a technical standard is going to target developers and implementers, but a lot of people who contributed to the FHIR standard aren't Computer Scientists or doesn't come from a computer background at all, they are clinicians, doctors or PHDs. The vocabulary that they use can be a bit hard to comprehend for the "technical" folks.

- The specification is targeted at **developers and implementers** (not clinicians)

- Every detail of the specification is tested at **connectathon events**

When creating a standard it is crucial to test its implementations because it can and does happen that we come up with standards, think that they are the optimal ones and then they turn out to be unworkable this is why **connectathon events** helps a lot in testing the standards before making them **normative**

### Common Scenarios

The **HL7 V3** tried to be comprehensive, it was trying to be **the** standard that can be usable for _every_ use case. So it becomes bloated with a lot of stuff that one person needed, or a small group of people needed.

So, FHIR places a heavy emphasis on the **80:20 rule**

- **80%** - Specification covers only what is needed by 80% of systems worldwide

- **20%** - FHIR is easy to extend for your use case

### Be Open

FHIR is **free to use** and free to contribute to

- Specification is licensed under Creative Commons CC0
- Many tools are open source (MIT / The APACHE License (Apache License)
- Many tutorials are free as well

### Be Easy to Adopt

- Being easy to learn is critical to the success of FHIR
- Many organizations have adopted FHIR in **weeks**

## Parts of FHIR

### FHIR: Data Model

As I mentioned earlier the **R** in FHIR stands for _resource_, and resource ofc is that _http_ concept of a resource. In the world of FHIR, an individual resource is a **data model** for some specific purpose.

- FHIR defines a set of roughly **150 resources**
- These are the building blocks of the specification, example include:

  - **Patient** (the person who receives healthcare)
  - **Encounter** (a doctor's appointment or hospital say)
  - **Observation** (e.g. a device reading, or lab value)
  - **Diagnostic Report** (e.g. a whole lab or X-Ray report)
  - **Medication Prescription** (Rx for meds)

Let's look into the **Patient** resource a little deeper,

![Patient Resource Type](https://user-images.githubusercontent.com/69139607/173682952-6bb2cb19-d2aa-482f-b3cd-2e481e73b479.jpg)

This is the structure of the **Patient** resource type which you can find on the [FHIR Website](https://www.hl7.org/fhir/patient.html), this website is in itself a highly comprehensive documentation of everything **FHIR** and even everything **HL7**

One of the things in this website/documentation that I think is great but may sound trivial to you, is that everything that can be explained has a link attached to it, which you can click to learn more about what it is.

For example, what do you think that little sigma symbol in the 2nd grid represents? Well, click on it and find out.

One other thing that I have noticed myself is that the documentation is written in a way tha I (a developer) don't have a hard time understanding it. It do be following the manifesto XD

Just look at how self explanatory the JSON is:

```json
{
  "resourceType" : "Patient",
  // from Resource: id, meta, implicitRules, and language
  // from DomainResource: text, contained, extension, and modifierExtension
  "identifier" : [{ Identifier }], // An identifier for this patient
  "active" : <boolean>, // Whether this patient's record is in active use
  "name" : [{ HumanName }], // A name associated with the patient
  "telecom" : [{ ContactPoint }], // A contact detail for the individual
  "gender" : "<code>", // male | female | other | unknown
  "birthDate" : "<date>", // The date of birth for the individual
  // deceased[x]: Indicates if the individual is deceased or not. One of these 2:
  "deceasedBoolean" : <boolean>,
  "deceasedDateTime" : "<dateTime>",
  "address" : [{ Address }], // An address for the individual
  "maritalStatus" : { CodeableConcept }, // Marital (civil) status of a patient
  // multipleBirth[x]: Whether patient is part of a multiple birth. One of these 2:
  "multipleBirthBoolean" : <boolean>,
  "multipleBirthInteger" : <integer>,
  "photo" : [{ Attachment }], // Image of the patient
  "contact" : [{ // A contact party (e.g. guardian, partner, friend) for the patient
    "relationship" : [{ CodeableConcept }], // The kind of relationship
    "name" : { HumanName }, // A name associated with the contact person
    "telecom" : [{ ContactPoint }], // A contact detail for the person
    "address" : { Address }, // Address for the contact person
    "gender" : "<code>", // male | female | other | unknown
    "organization" : { Reference(Organization) }, // C? Organization that is associated with the contact
    "period" : { Period } // The period during which this contact person or organization is valid to be contacted relating to this patient
  }],
  "communication" : [{ // A language which may be used to communicate with the patient about his or her health
    "language" : { CodeableConcept }, // R!  The language which can be used to communicate with the patient about his or her health
    "preferred" : <boolean> // Language preference indicator
  }],
  "generalPractitioner" : [{ Reference(Organization|Practitioner|
   PractitionerRole) }], // Patient's nominated primary care provider
  "managingOrganization" : { Reference(Organization) }, // Organization that is the custodian of the patient record
  "link" : [{ // Link to another patient resource that concerns the same actual person
    "other" : { Reference(Patient|RelatedPerson) }, // R!  The other patient or related person resource that the link refers to
    "type" : "<code>" // R!  replaced-by | replaces | refer | seealso
  }]
}
```
