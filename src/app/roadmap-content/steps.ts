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
    }
];