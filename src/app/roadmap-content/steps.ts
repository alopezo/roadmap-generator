export const stepsIntro = `The strategy will be include the following steps:`;
export const steps = [
    {
      group: "Standards and Artifacts",
      options: [
        {
          opSelector: "Data Models",
          text: `minimum datasets, message standards, etc`
        },
        {
          opSelector: "Code Systems",
          text: `e.g. SNOMED CT as the primary reference terminology for everything, ICD-10 for 
          reporting - assign a code system to all major data elements including presenting problem (reason for admission), problems, 
          diagnoses, procedures, allergies, medications etc`
        },
        {
          opSelector: "Translations",
          text: `e.g. Official languages, patient-friendly terms etc, tooling, resources, scope etc`
        },
        {
          opSelector: "Value Sets",
          text: `e.g. SNOMED CT reference sets`
        },
        {
          opSelector: "Maps",
          text: `e.g. use international map to ICD-10, and extend with map with local extension codes?`
        },
        {
          opSelector: "National SNOMED CT extension",
          text: `scope, tooling, resources, training`
        },
        {
          opSelector: "Quality Framework",
          text: `e.g. editorial guidelines, quality authoring processes, translation guidelines, terminology 
          binding guidelines, mapping guidelines, terminology governance structures`
        }
      ]
    },
    {
      group: "Infrastructure",
      options: [
        {
          opSelector: "Shared terminology server",
          text: `e.g. ....`
        },
        {
          opSelector: "Shared EHR and/or clinical registries",
          text: `e.g. ....`
        },
        {
          opSelector: "National platforms",
          text: `e.g. HIE data sharing platform`
        },
        {
          opSelector: "National services",
          text: `e.g. message validation service, patient identification service`
        },
        {
          opSelector: "National Release Center",
          text: `staffing requirements, main functions, tooling, upskilling`
        },
        {
          opSelector: "National Education and Training Services",
          text: `Develop education and training strategy - e.g. utilize international training, customize training for national/local 
          audience, translate training material, translate specification/guidance documents, in person training sessions in facilities, regions etc.`
        }
      ]
    },
    {
      group: "Promote Adoption",
      options: [
        {
          opSelector: "Develop national strategy for promoting adoption",
          text: `Identify and implement incentives - e.g. legislation, policy, financial payments, provision of national infrastructure, etc (see 
            'Implementation around the Globe' presentation). Conformity guidelines and assessments - e.g. Procurement requirements, vendor certification guidelines etc.`
        },
        {
          opSelector: "Onboard influencers/champions",
          text: `e.g. ...`
        },
        {
          opSelector: "Identify quick wins / low hanging fruit",
          text: `give some examples`
        },
        {
          opSelector: "Promote/supporting existing projects that adopt SNOMED CT",
          text: `e.g. ...`
        }
      ]
    },
    {
      group: "Capacity Building",
      options: [
        {
          opSelector: "Engage financial sponsors",
          text: `e.g. value proposition work, relevant education topics/resources`
        },
        {
          opSelector: "Engage clinicians",
          text: `e.g. things they can do, including education topics and communication/workshop ideas, points of involvement in projects (and tasks to involve them in). 
          Also consider clinical specialty groups, different healthcare sectors, and other professional groups that may be relevant`
        },
        {
          opSelector: "Engage software specialists",
          text: `vendors OR facility IT teams etc - e.g.  things they can do, including education topics and communication/workshop ideas, points of involvement 
          in projects (and tasks to involve them in)`
        },
        {
          opSelector: "Engage with the research community",
          text: `e.g.  things they can do, including education topics and communication/workshop ideas, points of involvement in projects (and tasks to involve them in)`
        },
        {
          opSelector: "Engage other stakeholders",
          text: `e.g. patients, healthcare administrators, public health managers, government/policy makers, system procurers etc.`
        }
      ]
    }
  ];