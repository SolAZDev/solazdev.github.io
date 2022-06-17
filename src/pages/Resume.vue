<template lang="pug">
q-page
  .row.q-col-gutter-md.resumeFile.print-hide.q-px-xl

    .col-12.col-md-4.col-lg-3.rc
      .row.q-col-gutter-sm
        .col-12.text-center.q-mt-lg
          .text-h4.text-primary.text-center(@click='printDiag = true') {{ resumeFile.name }}
            q-tooltip Click to print!
          .text-h6.text-primary.text-center {{ resumeFile.subtitle }}
          .text-body1 {{ resumeFile.email }} - {{ resumeFile.number }}
          //- q-btn(color='primary', icon='print',flat  @click='printDiag = true')

      q-space

      .lt-md.q-my-xl
        .text-subtitle1.text-primary.smCmdL Current Work Objective
        .text-subtitle2.text-justify {{ resumeFile.objective }}

      .column.q-gutter-y-lg.q-mb-sm
        div
          .text-body1.text-primary.smCmdL Major Skills
          .text-subtitle2.text-justify {{ listToText(resumeFile.skills.major) }}

        div
          .text-body1.text-primary.smCmdL Minor Skills
          .text-subtitle2.text-justify {{ listToText(resumeFile.skills.minor) }}

        div
          .text-body1.text-primary.smCmdL Languages & Frameworks
          .text-subtitle2.text-justify {{ listToText(resumeFile.skills.frameworks) }}

        div
          .text-body1.text-primary.smCmdL Software
          .text-subtitle2.text-justify {{ listToText(resumeFile.skills.software) }}

        div
          .text-body1.text-primary.smCmdL Education
          .column.q-gutter-y-sm
            div(v-for="edu in resumeFile.education")
              .text-subtitle1 {{ edu.degree }} - #[small.text-subtitle2 {{ edu.locale }}]

        div
          .text-subtitle1.text-primary.smCmdL Awards
          .column.q-gutter-y-sm
            div(v-for="award in resumeFile.awards")
              .text-subtitle1 {{ award.name }} - #[small {{ award.by }}]

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



  q-page-sticky.print-hide(position='bottom-right', :offset='[45,18]' v-if="$q.screen.gt.sm")
    q-fab(color='primary', icon='print', direction='up' size="md")
      q-fab-action(color='primary', @click='PrepareAndPrint(3)', icon='dns' label="Full Stack")
      q-fab-action(color='primary', @click='PrepareAndPrint(2)', icon='devices' label="Software")
      q-fab-action(color='primary', @click='PrepareAndPrint(1)', icon='games' label="Video Games")

    //- q-btn(color='primary', round, size="lg", icon='filter_list', @click='printDiag = true')

  //- Print Version
  .print-only.absolute-full
    .column.q-col-gutter-xs.q-pa-md
      .row
        .col-4.q-pr-sm.text-center
          .text-h6.text-primary(style="font-size:1.35rem") {{ resumeFile.name }}
          .text-subtitle1.text-primary {{ resumeFile.subtitle }}
          .text-subtitle2 {{ resumeFile.email }} - {{ resumeFile.number }}
          .text-subtitle2 SolAZDev.com
        .col.q-pl-sm
          .text-h6.text-right.text-primary.text-bold Summary & Qualifications
          .text-caption {{ resumeFile.objective }}
      .row
        .col-4.column.q-gutter-y-md.q-mb-sm.q-pr-sm
          q-separator(spaced)
          div
            .text-body1.text-primary.text-bold Major Skills
            .text-body2 {{ listToText(resumeFile.skills.major, " | ") }}

          div
            .text-body1.text-primary.text-bold Minor Skills
            .text-body2 {{ listToText(resumeFile.skills.minor, " | ") }}

          div
            .text-body1.text-primary.text-bold Languages & Frameworks
            .text-body2 {{ listToText(resumeFile.skills.frameworks, " | ") }}

          div
            .text-body1.text-primary.text-bold Software
            .text-body2 {{ listToText(resumeFile.skills.software, " | ") }}

          div
            .text-body1.text-primary.text-bold Education
            .column.reverse.q-gutter-y-sm
              .text-body2(v-for="edu in resumeFile.education") {{ edu.degree }} - #[span.text-caption {{ edu.locale }}]

          div
            .text-body1.text-primary.text-bold Awards
            .column.reverse.q-gutter-y-sm
              .text-body2(v-for="award in resumeFile.awards") {{ award.name }} - #[span.text-caption {{ award.by }}]

        .col.column.q-pl-md.q-gutter-y-xs
          .text-h6.text-right.text-primary Work Experience
          .column.q-gutter-y-xs(v-for="work in WorkExperienceByCategory")
            .row
              .col.text-body2.text-weight-bold.text-primary {{ work.position }} #[span.text-weight-regular.text-caption at {{ work.employer }} ({{ work.time }})]
            ul.column
              li.text-body2(v-for="resp in work.responsibilities") {{ resp }}

  q-dialog.print-hide(v-model='printDiag')
    q-card
      q-card-section.column.q-gutter-y-md
        .text-center
          .text-h6 Print Resume
          .text-caption Select your resume options
        .column
          .col-12.col-md-8.q-pa-sm.q-mx-auto
            .text-center Select the Field of Interest.
            q-btn-group.text-center
              q-btn(label='Video Games',@click='category = "game"' :color="(category == 'game' ? 'primary' : '')")
              q-btn(label='Software',   @click='category = "software"' :color="(category == 'software' ? 'primary' : '')")
              q-btn(label='Full Stack', @click='category = "backend"' :color="(category == 'backend' ? 'primary' : '')")
          .col.q-pa-sm.q-mx-auto
            q-input.dark(v-model.number='printJobLimit', type='number', filled dark label='Max Number of Jobs (Print)' max=5)
      q-card-actions(align='center')
        q-btn(flat, label='Print', color='primary', @click="filterOnMain=false; printResume()")
        q-btn(flat, label='Toggle Filter', color='primary', @click="filterOnMain=!filterOnMain")
        q-btn(flat, label='Cancel', color='primary', v-close-popup)


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

  printResume() {
    print();
  }

  listToTextAlt(arr: Array<string>, separator = " | ") {
    let res = "";
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      res += element + (i == arr.length - 1 ? "" : separator);
    }
    return res;
  }
  get WorkExperience() {
    return Array.from(this.resumeFile.work).splice(0, 6);
  }
  get WorkExperienceByCategory() {
    return Array.from(resume.work)
      .filter((w) => w.type.includes(this.category))
      .splice(0, this.filterOnMain ? 6 : this.printJobLimit);
  }
  PrepareAndPrint(kind: number) {
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
    print();
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
