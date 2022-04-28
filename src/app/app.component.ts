import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
// const htmlToDocx = require('html-to-docx');
// const saveAs = require('file-saver');
declare var anime: any;  

interface sourceData {
  opSelector: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roadmap-generator';

  visionSources!: sourceData[];
  aboutSnomedSources!: sourceData[];
  currentStateSources!: sourceData[];
  prioritiesIntro = '';
  capacityBuildingPriorities = new FormControl();
  capacityBuildingPrioritiesSources!: sourceData[];
  qualityPriorities = new FormControl();
  qualityPrioritiesSources!: sourceData[];
  adoptionPriorities = new FormControl();
  adoptionPrioritiesSources!: sourceData[];
  futureStateSources!: sourceData[];
  roadmap: string = '';

  constructor(readonly snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.roadmap = `
      <h1>SNOMED CT Implementation Roadmap</h1>
      <div class="Vision"></div>
      <div class="About-SNOMED"></div>
      <div class="Current-state"></div>
      <div class="Priorities"></div>
      <div class="Future-state"></div>
      `;
    this.visionSources = [
      {
        opSelector: "Ireland",
        text: `In 2020 SNOMED International published a new Strategy, their vision is that by 2025, Clinical
        Terminologies will be used globally, which will result in better health and improved patient
        outcomes, supported by one language of health.<br>
        Ee need to establish what a 'quality of care model' using clinical terminology for
        Irish citizens will look like in 2022. This strategy is aligned with the vision and strategy that
        SNOMED International has developed. The goal of this strategy is to reinforce and enable,
        quality care and cost effective delivery, through the adoption of standardised clinical
        terminology across the country.`
      },
      {
        opSelector: "India",
        text: `Our vision is 'health and wellbeing for all at all ages'. Continuum of care is a concept strongly 
        advocated by our policy. Citizencentricity, quality of care, better access, universal health coverage, and 
        inclusiveness are some of the key principles on which the NHP is founded. All these aspirations can be realized 
        principally by leveraging the power of the digital technologies.`
      },
      {
        opSelector: "United Kingdom",
        text: `Our vision is that:<br>
        <ul><li>clinicians can record, share and access patient information that retains the semantic fidelity (meaning) of clinical encounters</li>
        <li>commissioners, researchers and public health planners can access clinical information for ‘secondary uses’ with the rich detail of the clinical encounters</li></ul>
        To achieve this vision, we need to build an 'ecosystem' where information standards work together to support the ‘end-to-end’ flow of patient information across the health and care system. Information standards must not be developed in isolation from each other, but must be designed, developed and implemented collectively.
        <br>
        Through the implementation of mutually reinforcing information standards, the NHS clinical information system will become a 'learning health system'. This will lead to improved patient outcomes, lower commissioning costs, improved population health and more effective research to drive innovation.`
      }
    ];
    this.aboutSnomedSources = [
      {
        opSelector: "Short",
        text: `SNOMED International1 is a not-for-profit organization that owns and maintains SNOMED CT, the world’s most
        comprehensive clinical terminology. SNOMED International plays an essential role in improving the health of
        humankind by determining standards for a codified language that represents groups of clinical terms. SNOMED CT
        enables healthcare information to be exchanged globally for the benefit of patients/citizens, care providers and other
        stakeholders.<br><br>
        With SNOMED CT, users can record patient data more accurately, exchange patient data both within the health care
        team and with patients, both locally and across borders, to improve patient outcomes. Further, stakeholders can use
        SNOMED CT in health data and analytics platforms for clinical analytics, population analytics, management analytics,
        clinical research, applied research, and other research activities to improve health care. `
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
    this.currentStateSources = [
      {
        opSelector: "Placeholder",
        text: `Describe the current state of classifications and terminologies in you country, what are the limitations laying the 
        ground for improvements based on the implementation of SNOMED CT.`
      }
    ];
    this.prioritiesIntro = `The key driver of this new strategy is to ensure the adoption of SNOMED CT across all
    eHealth domain areas, requiring clinical terminology in new and existing solutions. This will
    be pursued via the following priorities:`;
    this.capacityBuildingPrioritiesSources = [
      {
        opSelector: "Engage clinicians",
        text: `Capacity building is one of the most important aspects of a SNOMED CT Implementation roadmap.`
      },
      {
        opSelector: "Engage stakeholders",
        text: `Capacity building is one of the most important aspects of a SNOMED CT Implementation roadmap.`
      },
      {
        opSelector: "Engage software specialists",
        text: `Capacity building is one of the most important aspects of a SNOMED CT Implementation roadmap.`
      },
      {
        opSelector: "Engage with the research community",
        text: `Capacity building is one of the most important aspects of a SNOMED CT Implementation roadmap.`
      },
      {
        opSelector: "Develop an education and training strategy",
        text: `Capacity building is one of the most important aspects of a SNOMED CT Implementation roadmap.`
      },
      {
        opSelector: "Establish the NRC",
        text: `Capacity building is one of the most important aspects of a SNOMED CT Implementation roadmap.`
      },
      {
        opSelector: "Resolve infrastructure requirements",
        text: `Capacity building is one of the most important aspects of a SNOMED CT Implementation roadmap.`
      }
    ];
    this.qualityPrioritiesSources = [
      {
        opSelector: "Governance structure",
        text: `Quality should be the focus of implementation efforts.`
      },
      {
        opSelector: "Adopt a quality process",
        text: `Quality should be the focus of implementation efforts.`
      },
      {
        opSelector: "Develop local processes for authoring",
        text: `Quality should be the focus of implementation efforts.`
      },
      {
        opSelector: "Develop national position statement of adoption",
        text: `Quality should be the focus of implementation efforts.`
      }
    ];
    this.adoptionPrioritiesSources = [
      {
        opSelector: "Customize training",
        text: `The strategy should promote the adoption of SNOMED CT.`
      },
      {
        opSelector: "Get influencers on-board",
        text: `The strategy should promote the adoption of SNOMED CT.`
      },
      {
        opSelector: "Identify quick wins",
        text: `The strategy should promote the adoption of SNOMED CT.`
      },
      {
        opSelector: "Plan how to map with existing classifications",
        text: `The strategy should promote the adoption of SNOMED CT.`
      },
      {
        opSelector: "Promote projects that adopt SNOMED",
        text: `The strategy should promote the adoption of SNOMED CT.`
      },
      {
        opSelector: "Conformity assessments",
        text: `The strategy should promote the adoption of SNOMED CT.`
      }
    ];
    this.futureStateSources = [
      {
        opSelector: "Placeholder",
        text: `Deascribe the target scenario, where SNOMED CT is fully implemented, and the describe teh benefits for data entry, 
        analytics, reporting, billing, and patient care.`
      }
    ];
  }

  changePriorities(section: string, event: any) {
    if(event.isUserInput) {
      setTimeout(() => {
        let allPriorities:any = [];
        if (this.capacityBuildingPriorities.value) {
          allPriorities = allPriorities.concat(this.capacityBuildingPriorities.value);
        }
        if (this.qualityPriorities.value) {
          allPriorities = allPriorities.concat(this.qualityPriorities.value);
        }
        if (this.adoptionPriorities.value) {
          allPriorities = allPriorities.concat(this.adoptionPriorities.value);
        }
        if (allPriorities && allPriorities.length) {
          let prioritiesText = `<p>${this.prioritiesIntro}</p><ul>`;
          allPriorities.forEach((loopPriority: any) => {
            prioritiesText = prioritiesText + `<li><b>${loopPriority.opSelector}</b>: ${loopPriority.text}</li>`;
          });
          prioritiesText = prioritiesText + '</ul>'
          this.replaceSection(section, `<h2>${section.replace('-',' ')}</h2>${prioritiesText}<br><br>`);
        } else {
          this.replaceSection(section, '');
        }
      }, 100)
    }
  }

  change(section: string, event: any) {
    if(event.isUserInput) {
      if (event.source.value == 'Not applicable') {
        this.replaceSection(section, '');
      } else {
        this.replaceSection(section, `<h2>${section.replace('-',' ')}</h2><p>${event.source.value}</p>`);
      }
    }
  }

  replaceSection(section: string, newValue: string) {
    const parser = new DOMParser();
    let parsedRoadmap = parser.parseFromString(this.roadmap, "text/html");
    let sectionNode = parsedRoadmap.querySelector(`.${section}`);
    sectionNode?.replaceChildren(newValue)
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
      var elements = document.querySelector(`.${section}`);
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
