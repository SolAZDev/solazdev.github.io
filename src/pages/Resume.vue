<template lang="pug">
q-page
  .print-hide
    .column.q-gutter-y-md(v-if="$q.screen.gt.sm")
      .text-center.text-primary
        .text-h6 Print or Save as PDF 
        .text-subtitle2 Please set Margins to None!
      .row.justify-center(style="height:5vh") 
        .col-2.text-center #[q-btn(color='primary', icon='games', label='Game Developer', @click='PrepareAndPrint(1)') ]
        .col-2.text-center #[q-btn(color='primary', icon='devices', label='Software Developer', @click='PrepareAndPrint(2)') ]
        .col-2.text-center #[q-btn(color='primary', icon='dns', label='Full Stack Developer', @click='PrepareAndPrint(3)') ]
    q-separator.q-my-lg.q-mx-xl( inset, dark v-if="$q.screen.gt.sm")

    .row.q-col-gutter-md.resumeFile.q-px-xl.q-mb-lg
      .col-12.col-md-4.col-lg-3.rc
        .row.q-col-gutter-sm
          .col-12.text-center.q-mt-lg
            .text-h4.text-primary.text-center {{ resumeFile.name }}
            .text-h6.text-primary.text-center {{YourNext}}
            .text-body1 Available to work in the US
            .text-body1 {{ resumeFile.email }} - SolAZDev.com

        q-space

        .column.q-gutter-y-lg.q-mb-sm
          div
            .text-body1.text-primary.smCmdL Major Skills
            .text-subtitle2.text-justify {{ listToText(resumeFile.skills.major) }}

          div
            .text-body1.text-primary.smCmdL Minor Skills
            .text-subtitle2.text-justify {{ listToText(resumeFile.skills.minor) }}

          div
            .text-body1.text-primary.smCmdL Languages & Frameworks
            .text-subtitle2.text-justify {{ objListToString(resumeFile.skills.frameworks) }}

          div
            .text-body1.text-primary.smCmdL Software
            .text-subtitle2.text-justify {{ objListToString(resumeFile.skills.software) }}

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

      .col-12.col-md-8.col-lg-9
        //- div.container.gt-sm.q-mt-lg.q-mb-xl
          .text-h5.text-primary.text-center Summary & Qualifications
          .text-body1.text-justify {{ resumeFile.objective }}

        .q-mt-lg.text-h5.text-primary.q-mb-md.text-center Work Experience
        .row.q-col-gutter-xs.bg-dark.rounded-borders.worokExp
          .col-12.col-md-6.col-lg-4(v-for="work in filterOnMain?WorkExperienceByCategory:WorkExperience")
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
  .print-only.absolute-full(style="margin-top:-2rem")
    //- .column.q-col-gutter-xs.q-pa-md
      //- .row
        .col.q-pl-sm
          .text-h6.text-right.text-primary.text-bold 
          //- Summary & Qualifications
          .text-caption 
          //- {{ resumeFile.objective }}
    .row.q-px-md
      .col-4.column.q-gutter-y-md.q-mb-sm.q-pr-sm
        .q-pr-sm.text-center
          .text-h6.text-primary {{ resumeFile.name }}
          .text-subtitle1.text-primary {{ YourNext }}
          .text-subtitle2 {{ resumeFile.email }} - {{ resumeFile.number }}
          .text-subtitle2 Available to work in the US
          .text-subtitle2 SolAZDev.com
        q-separator(spaced)
        div
          .text-body1.text-primary.text-bold Major Skills
          .text-body2 {{ listToText(resumeFile.skills.major, " | ") }}

        div
          .text-body1.text-primary.text-bold Minor Skills
          .text-body2 {{ listToText(resumeFile.skills.minor, " | ") }}

        div
          .text-body1.text-primary.text-bold Languages & Frameworks
          .text-body2 {{ objListToString(resumeFile.skills.frameworks, true) }}

        div
          .text-body1.text-primary.text-bold Software
          .text-body2 {{ objListToString(resumeFile.skills.software, true) }}

        div
          .text-body1.text-primary.text-bold Awards
          .column.reverse.q-gutter-y-sm
            .text-body2(v-for="award in resumeFile.awards") {{ award.name }} - #[span.text-caption {{ award.by }}]

        div
          .text-body1.text-primary.text-bold Education
          .column.reverse.q-gutter-y-sm
            .text-body2(v-for="edu in resumeFile.education") {{ edu.degree }} - #[span.text-caption {{ edu.locale }} ({{edu.years}})]

      .col.column.q-pl-md.q-gutter-y-xs
        .text-h6.text-right.text-primary Work Experience
        .column.q-gutter-y-xs(v-for="work in WorkExperienceByCategory")
          .row
            .col.text-body2.text-weight-bold.text-primary {{ work.position }} #[span.text-weight-regular.text-caption at {{ work.employer }} - {{ work.time }}]
          ul.column
            li.text-body2(v-for="resp in work.responsibilities") {{ resp }}

 
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

.worokExp
  min-height: 65vh
</style>
