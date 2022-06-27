<template lang="pug">
q-page
  .print-hide

    .column.q-gutter-y-md(v-if="$q.screen.gt.sm")
      .text-center.text-primary
        .text-h6 Print or Save as PDF 
      .row.justify-center(style="height:5vh") 
        .col-2.text-center #[q-btn(color='primary', icon='games', label='Game Developer', @click='PrepareAndPrint(1)') ]
        .col-2.text-center #[q-btn(color='primary', icon='devices', label='Software Developer', @click='PrepareAndPrint(2)') ]
        .col-2.text-center #[q-btn(color='primary', icon='dns', label='Full Stack Developer', @click='PrepareAndPrint(3)') ]
    q-separator.q-my-sm.q-mx-xl(dark, v-if="$q.screen.gt.sm")

    .row.q-col-gutter-md.resumeFile.q-px-lg-xl.q-mb-lg-lg.q-px-xs-md
      .col-12.col-md-4.col-lg-3.column.q-pr-lg-md
        .row.q-col-gutter-sm
          .col-12.text-center.q-mt-lg
            .text-h4.text-primary.text-center(:class="$q.screen.lt.md?'text-h6':''") {{ resumeFile.name }}
            .text-h6.text-primary.text-center(:class="$q.screen.lt.md?'text-body1':''") {{YourNext}}
            .text-body1 Available to work in the US
            .text-body1 {{ resumeFile.email }} - SolAZDev.com

        //- q-space

        .column.q-gutter-y-lg.q-py-lg-lg.q-mt-xs-sm.q-mt-md-none
          div
            .text-body1.text-primary.smCmdL Skills
            .text-subtitle2.text-justify {{ listToText(resumeFile.skills) }}

          div
            .text-body1.text-primary.smCmdL Languages & Frameworks
            .text-subtitle2.text-justify {{ objListToString(resumeFile.frameworks) }}

          div
            .text-body1.text-primary.smCmdL Software
            .text-subtitle2.text-justify {{ objListToString(resumeFile.software) }}

          div
            .text-subtitle1.text-primary.smCmdL Awards
            .column.q-gutter-y-sm
              div(v-for="award in resumeFile.awards")
                .text-subtitle1 {{ award.name }} - #[small {{ award.by }}]

          div
            .text-body1.text-primary.smCmdL Education
            .column.q-gutter-y-sm
              div(v-for="edu in resumeFile.education")
                .text-subtitle1 {{ edu.degree }} - #[small.text-subtitle2 {{ edu.locale }} ({{edu.years}})]

      .col-12.col-md-8.col-lg-9.q-pl-lg-md
        .q-mt-lg.text-h5.text-primary.q-mb-md.text-center Work Experience
        .row.q-col-gutter-xs.bg-dark.rounded-borders.workExp
          .col-12.col-lg-6(v-for="work in resumeFile.work")
            q-card.no-shadow.q-card-experience
              q-card-section.q-pb-none
                .text-center
                  .text-h6.text-primary {{ work.position }} #[span.text-white.text-subtitle2 at {{ work.employer }} ]
                  .text-white.text-subtitle2 {{work.time}}
              q-card-section.q-pt-md
                .text-center.text-body2 Responsibilities & Achievements
                ul.q-pl-sm.q-mt-xs.q-mb-none.text-justify.q-gutter-y-xs
                  li.text-subtitle2(v-for="resp in work.responsibilities") {{ resp }}


  //- Print Version
  .print-only(style="margin-top:-1rem")
    .row.q-px-md
      .col-4.column.q-gutter-y-md.q-mb-sm.q-pr-sm
        .q-pr-sm.text-center
          .text-h6.text-primary {{ resumeFile.name }}
          .text-subtitle1.text-primary {{ YourNext }}
          .text-subtitle2 {{ resumeFile.email }} - {{ resumeFile.number }}
          .text-subtitle2 Available to work in the US
          .text-subtitle2 https://SolAZDev.com
        //- q-space
        div
          .text-body1.text-primary.text-bold Skills
          .hLSeparator
          .text-body2.text-justify {{ listToText(resumeFile.skills, " | ") }}

        div
          .text-body1.text-primary.text-bold Languages & Frameworks
          .hLSeparator
          .text-body2.text-justify {{ objListToString(resumeFile.frameworks, true) }}

        div
          .text-body1.text-primary.text-bold Software
          .hLSeparator
          .text-body2.text-justify {{ objListToString(resumeFile.software, true) }}

        div
          .text-body1.text-primary.text-bold Awards
          .hLSeparator
          .column.q-gutter-y-sm
            .text-body2.text-justify(v-for="award in resumeFile.awards") {{ award.name }} - #[span.text-caption {{ award.by }}]

        div
          .text-body1.text-primary.text-bold Education
          .hLSeparator
          .column.q-gutter-y-sm
            .text-body2.text-justify(v-for="edu in resumeFile.education") {{ edu.degree }} - #[span.text-caption {{ edu.locale }} ({{edu.years}})]
      
      //- .vSeparator

      .col.column.q-pl-md.q-gutter-y-xs
        .text-h6.text-right.text-primary Work Experience 
        .hRSeparator
        .column.wExp(v-for="work in WorkExperienceByCategory")
          .row
            .col.text-body2.text-weight-bold.text-primary {{ work.position }} #[span.text-weight-regular.text-caption at {{ work.employer }} - {{ work.time }}]
          ul.column
            li(v-for="resp in work.responsibilities") {{ resp }}

 
</template>
<script lang="ts">
import resume from "src/data/resume";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Resume extends Vue {
  resumeFile = resume;
  category = "game";
  filterOnMain = false;
  printDiag = false;
  printJobLimit = 5;
  listToText(arr: Array<string>, separator = " | ") {
    return arr.toString().replace(/,/g, separator);
  }
  objListToString(obj: { name: string; type: string[] }[], filtered = false) {
    let final = new Array<string>();
    obj.forEach((o) => {
      if (this.category == "" || !filtered) final.push(o.name);
      else {
        if (o.type.includes(this.category)) final.push(o.name);
      }
    });
    return this.listToText(final);
  }

  printResume() {
    print();
  }

  get WorkExperience() {
    return Array.from(this.resumeFile.work).splice(0, 6);
  }
  get WorkExperienceByCategory() {
    return Array.from(resume.work)
      .filter((w) => w.type.includes(this.category))
      .splice(0, this.filterOnMain ? 6 : this.printJobLimit);
  }
  get YourNext() {
    let str = "";
    switch (this.category) {
      default:
        str = "Passionate Developer.";
        break;
      case "game":
        str = "Passionate Game Developer.";
        break;
      case "software":
        str = "Passionate Web & Software Developer.";
        break;
      case "backend":
        str = "Passionate Full Stack Developer.";
        break;
    }
    return str;
  }
  PrepareAndPrint(kind: number) {
    console.log(kind);
    switch (kind) {
      case 1:
        this.category = "game";
        break;
      case 2:
        this.category = "software";
        break;
      case 3:
        this.category = "backend";
        break;
    }
    setTimeout(() => print(), 120);
    setTimeout(() => (this.category = ""), 150);
    // print();
  }
}
</script>
<style lang="sass">
.leftRow
  @media (min-width: $breakpoint-md-min)
    border-right: 1px solid $primary

.resume
  min-height: 88.5vh

.space
    flex-grow: 1

.rc
  display: flex
  flex-direction: column

.noDecoList
  list-style-type: none

.smCmdL
  @media (max-width: $breakpoint-sm-max)
    text-align: center
  @media (min-width: $breakpoint-md-min)
    text-align: left

.q-card
  min-height: 365px

.q-card-experience
  min-height: 325px

.text-subtitle2
  font-weight: unset

.ltrGradient
  color: white
  padding-left: 1rem
  background: rgb(23,178,255)
  background: linear-gradient(90deg, $primary 35%, transparentize($primary, 1) 90%)

.rtlGradient
  color: white
  padding-right: 1rem
  background: $primary
  background: linear-gradient(270deg, $primary 35%, transparentize($primary, 1) 80%)

.centerGradient
  color: white
  text-align: center
  background: linear-gradient(90deg, transparentize($primary, 1) 0%, $primary 30%, $primary 65%, transparentize($primary, 1) 100%)

.q-card
  min-height: unset

.workExp
  min-height: 65vh

.q-gutter-y-lg
  *
    @media (max-width: $breakpoint-md-min)
      margin-top: 8px !important
      small
        font-size:  70%


.print-only
  .text-h6
    font-size: 1.15rem
  .text-subtitle2, .text-body2
    font-size: 0.8rem

  .wExp
    .column
      margin: 8px 0
  ul
    padding-left: 4px !important
    margin-top: 4px !important
    li
      font-size: 0.8rem
      text-align: justify
      hyphens: none

.vSeparator
  border: 1px solid transparentize($primary, .5)
  margin: 5px 2px 1vh 0px !important

.hRSeparator
  border-bottom: 2px solid transparentize($primary, .5)
  margin: -4px 0px 0px 5% !important

.hLSeparator
  border-bottom: 2px solid transparentize($primary, .5)
  margin: -4px 5% 0px 0px !important
</style>
