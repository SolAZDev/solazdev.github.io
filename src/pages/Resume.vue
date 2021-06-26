<template lang="pug">
q-page(padding)
  .row.q-col-gutter-md.resume
    .col-12.col-md-4.col-lg-3.rc
      .row.q-col-gutter-sm
        .col-12.row.justify-center
          q-img(:src='Resume.icon', :ratio='1', spinner-color='primary', spinner-size='82px', width="40%")
        .col-12.text-center
          .text-h6.text-primary.text-center {{Resume.name}}
          .text-subtitle2.text-primary.text-center {{Resume.subtitle}}
          .text-subtitle2 {{Resume.email}} - {{Resume.local}}
      q-space

      .col(v-if="$q.screen.lt.md")
        .text-subtitle1.text-primary.smCmdL Current Work Objective
        .text-subtitle2.text-justify {{Resume.objective}}
      .col
        .text-subtitle1.text-primary.smCmdL Education
        div(v-for="edu in Resume.education")
          .text-subtitle1 {{edu.degree}}
          .text-subtitle2 {{edu.locale}}
      div
        .text-subtitle1.text-primary.smCmdL Awards
        div(v-for="award in Resume.awards")
          .text-subtitle1 {{award.name}} - #[small {{award.by}}]
      .col
        .text-subtitle1.text-primary.smCmdL Major Skills
        .text-subtitle2 {{listToText(Resume.skills.major)}}
      .col
        .text-subtitle1.text-primary.smCmdL Minor Skills
        .text-subtitle2 {{listToText(Resume.skills.minor)}}
      .col
        .text-subtitle1.text-primary.smCmdL Languages & Frameworks
        .text-subtitle2 {{listToText(Resume.skills.frameworks)}}
      .col
        .text-subtitle1.text-primary.text-center Software
        .text-subtitle2 {{listToText(Resume.skills.software)}}

    .col-12.col-md-8.col-lg-9
      div.container(v-if="$q.screen.gt.sm")
        .text-h5.text-primary.text-center Current Work Objective
        .text-body1 {{Resume.objective}}

      .text-h5.text-primary.q-mb-md.text-center Work Experience
      .row.q-col-gutter-lg
        .col-12.col-md-6.col-lg-4(v-for="work in Resume.work")
          q-card
            q-card-section.p-qb-none
              .text-center
                .text-h5.text-primary {{work.position}}
                .text-subtitle2 {{work.employer}} - {{work.duration}}
            q-card-section.q-pt-none
              .text-center.text-h6 Responsibilities
              ul.q-pl-sm.text-justify #[li.text-body2.q-py-sm(v-for="resp in work.responsibilities") {{resp}}]
</template>
<script lang="ts">
import * as resume from 'src/data/resume';
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Resume extends Vue {
  Resume = resume.default;

  listToText(arr: Array<string>){
    return arr.toString().replace(/,/g, " | ")
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
</style>
