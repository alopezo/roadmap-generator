import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
// const htmlToDocx = require('html-to-docx');
// const saveAs = require('file-saver');
declare var anime: any;  

interface sourceData {
  opSelector: string;
  text: string;
}

interface dataGrouper {
  group: string;
  options: sourceData[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'roadmap-generator';
  country= 'Country Name';

  backgrounds!: sourceData[];
  visionIntro = '';
  visions!: sourceData[];
  selectedVisions = [];
  currentStateSources!: sourceData[];
  goalsIntro = '';
  goals!: sourceData[];
  selectedGoals = [];
  clinicalFocusIntro = '';
  clinicalFocus!: sourceData[];
  selectedClinicalFocus = [];
  stepIntro = '';
  steps!: dataGrouper[];
  selectedSteps:any[] = [];
  projects!: sourceData[];
  closings!: sourceData[];

  futureStateSources!: sourceData[];
  roadmap: string = '';

  constructor(readonly snackBar: MatSnackBar, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(StepsDatesDialog, {
      width: '40%',
      height: '90%',
      data: this.selectedSteps,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result);
      this.selectedSteps = result;
    });
  }

  ngOnInit(): void {
    this.roadmap = `
      <h1><span class='country'></span>: SNOMED CT Implementation Roadmap</h1>
      <div class="Background"></div>
      <div class="Vision"></div>
      <div class="Current-state"></div>
      <div class="Goals"></div>
      <div class="Clinical-focus"></div>
      <div class="Steps"></div>
      <div class="Priorities"></div>
      <div class="Implementation-projects"></div>
      <div class="Closing-remarks"></div>
      `;
      this.backgrounds = [
        {
          opSelector: "Short",
          text: `SNOMED CT, the world’s most comprehensive clinical terminology. With SNOMED CT, users can record patient 
          data more accurately, exchange patient data both within the health care
          team and with patients, both locally and across borders, to improve patient outcomes. Further, stakeholders can use
          SNOMED CT in health data and analytics platforms for clinical analytics, population analytics, management analytics,
          clinical research, applied research, and other research activities to improve health care. <br>
          To achieve the full potential of SNOMED CT in <span class='country'></span>,  it must be widely implemented in well 
          designed systems. This document describes the roadmap for SNOMED CT adoption in <span class='country'></span>.`
        },
        {
          opSelector: "Long",
          text: `SNOMED International1 is a not-for-profit organization that owns and maintains SNOMED CT, the world’s most
          comprehensive clinical terminology. SNOMED International plays an essential role in improving the health of
          humankind by determining standards for a codified language that represents groups of clinical terms. SNOMED CT
          enables healthcare information to be exchanged globally for the benefit of patients/citizens, care providers and other
          stakeholders.<br><br>
          With SNOMED CT, users can record patient data more accurately, exchange patient data both within the health care
          team and with patients, both locally and across borders, to improve patient outcomes. Further, stakeholders can use
          SNOMED CT in health data and analytics platforms for clinical analytics, population analytics, management analytics,
          clinical research, applied research, and other research activities to improve health care. <br>
          SNOMED International strives to determine the best global standards for health terminologies and to engage with the
          global healthcare community to improve SNOMED CT to better serve the clinical information needs of a diverse range
          of health care stakeholders.<br><br>
          National Members are the key to the continued evolution and use of SNOMED CT. SNOMED International has
          witnessed the growth in its Member base from 28 Members at the start of 2015 to 41 Members, as of July 2021.
          Incremental to the Member base are affiliate licensees, which expands the use of SNOMED CT into more than eighty countries
          globally.`
        },
        {
          opSelector: "Test Long",
          text: `SNOMED International1 is a not-for-profit organization that owns and maintains SNOMED CT, the world’s most
          comprehensive clinical terminology. SNOMED International plays an essential role in improving the health of
          humankind by determining standards for a codified language that represents groups of clinical terms. SNOMED CT
          enables healthcare information to be exchanged globally for the benefit of patients/citizens, care providers and other
          stakeholders.<br><br>
          With SNOMED CT, users can record patient data more accurately, exchange patient data both within the health care
          team and with patients, both locally and across borders, to improve patient outcomes. Further, stakeholders can use
          SNOMED CT in health data and analytics platforms for clinical analytics, population analytics, management analytics,
          clinical research, applied research, and other research activities to improve health care. <br>
          SNOMED International strives to determine the best global standards for health terminologies and to engage with the
          global healthcare community to improve SNOMED CT to better serve the clinical information needs of a diverse range
          of health care stakeholders.<br><br>
          National Members are the key to the continued evolution and use of SNOMED CT. SNOMED International has
          witnessed the growth in its Member base from 28 Members at the start of 2015 to 41 Members, as of July 2021.
          Incremental to the Member base are affiliate licensees, which expands the use of SNOMED CT into more than eighty countries
          globally.<br><br>
          SNOMED International1 is a not-for-profit organization that owns and maintains SNOMED CT, the world’s most
          comprehensive clinical terminology. SNOMED International plays an essential role in improving the health of
          humankind by determining standards for a codified language that represents groups of clinical terms. SNOMED CT
          enables healthcare information to be exchanged globally for the benefit of patients/citizens, care providers and other
          stakeholders.<br><br>
          With SNOMED CT, users can record patient data more accurately, exchange patient data both within the health care
          team and with patients, both locally and across borders, to improve patient outcomes. Further, stakeholders can use
          SNOMED CT in health data and analytics platforms for clinical analytics, population analytics, management analytics,
          clinical research, applied research, and other research activities to improve health care. <br>
          SNOMED International strives to determine the best global standards for health terminologies and to engage with the
          global healthcare community to improve SNOMED CT to better serve the clinical information needs of a diverse range
          of health care stakeholders.<br><br>
          National Members are the key to the continued evolution and use of SNOMED CT. SNOMED International has
          witnessed the growth in its Member base from 28 Members at the start of 2015 to 41 Members, as of July 2021.
          Incremental to the Member base are affiliate licensees, which expands the use of SNOMED CT into more than eighty countries
          globally.<br><br>
          SNOMED International1 is a not-for-profit organization that owns and maintains SNOMED CT, the world’s most
          comprehensive clinical terminology. SNOMED International plays an essential role in improving the health of
          humankind by determining standards for a codified language that represents groups of clinical terms. SNOMED CT
          enables healthcare information to be exchanged globally for the benefit of patients/citizens, care providers and other
          stakeholders.<br><br>
          With SNOMED CT, users can record patient data more accurately, exchange patient data both within the health care
          team and with patients, both locally and across borders, to improve patient outcomes. Further, stakeholders can use
          SNOMED CT in health data and analytics platforms for clinical analytics, population analytics, management analytics,
          clinical research, applied research, and other research activities to improve health care. <br>
          SNOMED International strives to determine the best global standards for health terminologies and to engage with the
          global healthcare community to improve SNOMED CT to better serve the clinical information needs of a diverse range
          of health care stakeholders.<br><br>
          National Members are the key to the continued evolution and use of SNOMED CT. SNOMED International has
          witnessed the growth in its Member base from 28 Members at the start of 2015 to 41 Members, as of July 2021.
          Incremental to the Member base are affiliate licensees, which expands the use of SNOMED CT into more than eighty countries
          globally.`
        }
      ];
    this.visionIntro = `Our vision is that:`;
    this.visions = [
      {
        opSelector: "Better health",
        text: `- We need to establish what a 'quality of care model' using clinical terminology for
        all citizens in will look like in <span class='country'></span> in 2022. The goal of this strategy is to reinforce and enable,
        quality care and cost effective delivery, through the adoption of standardised clinical
        terminology across the country.`
      },
      {
        opSelector: "Continuity of care",
        text: `- Continuum of care is a concept strongly advocated by our policy. Citizencentricity, quality of care, better access, universal 
        health coverage, and inclusiveness are some of our key principles. All these aspirations can be realized 
        principally by leveraging the power of the digital technologies.`
      },
      {
        opSelector: "Better information",
        text: `- Clinicians can record, share and access patient information that retains the semantic fidelity (meaning) of clinical encounters. 
        Commissioners, researchers and public health planners can access clinical information for ‘secondary uses’ with the rich detail of the clinical encounters.`
      }
    ];
    this.currentStateSources = [
      {
        opSelector: "Add placeholder",
        text: `List topics for consideration, including: Size of healthcare sector (e.g. number of public/private facilities, healthcare providers), 
        how the healthcare sector is broken up into regions, computerisation in each sector, existing standards used (e.g. messaging, information models, 
        code systems), Local vendor environment, national infrastructure in place (or planned) such as NEHR`
      }
    ];
    this.goalsIntro = `We have defined the following goals for the strategy:`;
    this.goals = [
      {
        opSelector: "Standardising health record data",
        text: `This focuses on capturing data in clinical systems (e.g. hospitals, GPs etc) in a standardised way between different facilities`
      },
      {
        opSelector: "Data exchange/sharing",
        text: `This focuses on using SNOMED CT as a common reference terminology for sharing data between facilities and/or healthcare providers`
      },
      {
        opSelector: "Clinical tools / Clinician support",
        text: `This focuses on clinical decision support, linking to clinical knowledge/protocols/guidelines (see the Expo CDS tutorial for the different types of CDS to mention here)`
      },
      {
        opSelector: "Clinical research",
        text: `This focuses on using SNOMED CT to improve research quality, focusing on training researchers to leverage SNOMED CT Advantages`
      }
    ];
    this.clinicalFocusIntro = `The strategy will be focused on the following clinical areas:`;
    this.clinicalFocus = [
      {
        opSelector: "Healthcare sector",
        text: `Hospitals, GPs, Pharmacy, Clinical registries, Clinical research`
      },
      {
        opSelector: "Specialty areas",
        text: `Cardiology, ED, etc`
      },
      {
        opSelector: "Clinical goals",
        text: `Improve stroke management, Reduce deaths from diabetes, Increased continuity of care for cancer patients etc.`
      }
    ];
    this.stepIntro = `The strategy will be include the following steps:`;
    this.steps = [
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
    this.projects = [
      {
        opSelector: "Placeholder",
        text: `Define use cases and location/scope of initial implementation focus. e.g. Hospital X, Clinic Y, Clinical register Z, Region W, National EHR, National HIE infrastructure etc`
      }
    ];
    this.closings = [
      {
        opSelector: "Placeholder",
        text: `Conclude by saying something inspirational about the vision and benefits of adopting SNOMED CT`
      }
    ];

    this.nameChanged()
  }

  changeVision() {
    setTimeout(() => {
      if (this.selectedVisions.length > 0) {
        let visionsText = `<p>${this.visionIntro}</p><br>`;
        this.selectedVisions.forEach((vision: any) => {
          visionsText = visionsText + `${vision.text}<br>`;
        })
        this.replaceSection('Vision', `<h2>Vision</h2>${visionsText}<br><br>`);
        this.nameChanged()
      } else {
        this.replaceSection('Vision', '');
      }
    }, 100);
  }

  changeGoals() {
    setTimeout(() => {
      if (this.selectedGoals.length > 0) {
        let goalsText = `<p>${this.goalsIntro}</p><ul>`;
        this.selectedGoals.forEach((goal: any) => {
          goalsText = goalsText + `<li>${goal.text}</li>`;
        })
        this.replaceSection('Goals', `<h2>Goals</h2>${goalsText}</ul><br><br>`);
        this.nameChanged()
      } else {
        this.replaceSection('Goals', '');
      }
    }, 100);
  }

  changeClinicalFocus() {
    setTimeout(() => {
      if (this.selectedClinicalFocus.length > 0) {
        let focusText = `<p>${this.clinicalFocusIntro}</p><ul>`;
        this.selectedClinicalFocus.forEach((focus: any) => {
          focusText = focusText + `<li>${focus.opSelector}: ${focus.text}</li>`;
        })
        this.replaceSection('Clinical-Focus', `<h2>Clinical focus</h2>${focusText}</ul><br><br>`);
        this.nameChanged()
      } else {
        this.replaceSection('Clinical-Focus', '');
      }
    }, 100);
  }

  changeSteps() {
    setTimeout(() => {
      if (this.selectedSteps.length > 0) {
        let groups = this.selectedSteps.map( ({group}) => (group))
        let groupsu =  [...new Set(groups)];
        let stepsText = `<p>${this.stepIntro}</p><ul>`;
        groupsu.forEach( (group:any) => {
          stepsText = stepsText + `<li>${group}<ul>`;
          this.selectedSteps.forEach((step: any) => {
            if (step.group == group) {
              stepsText = stepsText + `<li>${step.step.opSelector}: ${step.step.text}</li>`;
            }
          })
          stepsText = stepsText + `</ul></li>`;
        });
        this.replaceSection('Clinical-Focus', `<h2>Clinical focus</h2>${stepsText}</ul><br><br>`);
        this.nameChanged()
      } else {
        this.replaceSection('Clinical-Focus', '');
      }
    }, 100);
  }

  change(section: string, event: any) {
    if(event.isUserInput) {
      if (event.source.value == 'Not applicable') {
        this.replaceSection(section, '');
      } else {
        this.replaceSection(section, `<h2>${section.replace('-',' ')}</h2><p>${event.source.value}</p>`);
        this.nameChanged()
      }
    }
  }

  nameChanged() {
    this.replaceSection('country', this.country);
  }

  replaceSection(section: string, newValue: string) {
    const parser = new DOMParser();
    let parsedRoadmap = parser.parseFromString(this.roadmap, "text/html");
    let sectionNodes = parsedRoadmap.querySelectorAll(`.${section}`);
    sectionNodes.forEach(function(sectionNode) {
      sectionNode?.replaceChildren(newValue)
    });
    let body = parsedRoadmap.querySelector(`body`)?.innerHTML;
    body = body?.split('&lt;').join('<');
    body = body?.split('&gt;').join('>');
    if (body) {
      this.roadmap = body;
    }
    this.animate(section)
  }

  htmlDecode(input: string) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  animate(section: string) {
    setTimeout(() => {
      var elements = document.querySelectorAll(`.${section}`);
      anime({
        targets: elements,
        backgroundColor: ['#f0fc03','#fff'],
        duration: 8000
      });
    }, 100)
  }

  saveToWord() {
    this.snackBar.openFromComponent(AppSnackComponent, {
      duration: 3000,
    });
    // const htmlString = `<html><body>${this.roadmap}</body></html>`;
    // const fileBuffer = await htmlToDocx(htmlString, null, {
    //   table: { row: { cantSplit: true } },
    //   footer: true,
    //   pageNumber: true,
    // });
  
    // saveAs(fileBuffer, 'html-to-docx.docx');
  }

}

@Component({
  selector: 'app-root-snack',
  templateUrl: 'app-root-snack.html',
  styles: [],
})
export class AppSnackComponent {}

@Component({
  selector: 'steps-dates-dialog',
  templateUrl: 'setps-dates-dialog.html',
})
export class StepsDatesDialog {
  constructor(
    public dialogRef: MatDialogRef<StepsDatesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
