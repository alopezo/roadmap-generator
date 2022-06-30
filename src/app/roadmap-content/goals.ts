export const goalsIntro = `We have defined the following goals for the strategy:`;
export const goals = [
    {
    opSelector: "Standardising health record data",
    text: `<p>SNOMED CT will be defined as the standard for capturing data in clinical systems, including the domains of diagnosis, 
    therapeutic and diagnosis procedures, medications, immunizations, and allergies. 
    When SNOMED CT is integrated in clinical systems it allows practitioners to accurately represent clinical concepts, generating datasets 
    ready to be used in analytics, quality metrics, decision support and other use cases.
    In the cases wehere local code systems or classifications are required for business reasons, these will be mapped with SNOMED CT, so the primary data entry 
    can be standardized to use SNOMED CT and information can be transformed into this vocabularies as necessary.</p>`
    },
    {
    opSelector: "Data exchange",
    text: `<p>SNOMED CT will be defined as the common reference terminology for sharing data between facilities and/or healthcare providers. Information 
    exchange is the key to implement continuity of care and patient centered care. Implementation guides that combine the benefits of SNOMED CT in 
    combination with HL7 FHIR resources will ensure the transmission of information and meaning between different systems.</p>`
    },
    {
    opSelector: "Clinician support",
    text: `<p>SNOMED CT will be defined as the standard for represeting clinical knowledge in decision support systems. 
    Clinical decision support tools link patient information to clinical knowledge, protocols or guidelines, providing alerts and advice 
    to clinicians during the care of the patient. SNOMED CT provides the adequate level of detail to encode knowledge rules conditions and actions.
    Using a SNOMED CT it's possible to share knowledge databases and access a wide market of vendors that provide services using the standard.</p>`
    },
    {
    opSelector: "Clinical research",
    text: `<p>Researchers will be trained to leverage SNOMED CT avantages for data analytics in clinical research. The availability of large SNOMED CT 
    encoded datasets opens many opportunities for very accurate patient selection for inclusion in clinical trials, it facilitates retrospective 
    studies, and opens the door to the realization real world evidence studies.</p>`
    }
];