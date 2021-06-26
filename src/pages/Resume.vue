<template lang="pug">
q-page(padding)
  .row.q-col-gutter-md.resume
    .col-12.col-md-4.col-lg-3.rc.q-col-gutter-md.q-px-sm.leftRow
      .row.q-col-gutter-md
        .col-12.row.justify-center
          q-img(:src='Resume.icon', :ratio='1', spinner-color='primary', spinner-size='82px', width="40%")
        .col-12.text-center
          .text-h6.text-primary.text-center {{Resume.name}}
          .text-subtitle2.text-primary.text-center {{Resume.subtitle}}
          .text-subtitle2 {{Resume.email}} - {{Resume.local}}
      q-space

      div
        .text-h6.text-primary.text-center Education
        div(v-for="edu in Resume.education")
          .text-subtitle1 {{edu.degree}}
          .text-subtitle2 {{edu.locale}}
      div
        .text-h6.text-primary.text-center Awards
        div(v-for="award in Resume.awards")
          .text-subtitle1 {{award.name}} - #[small {{award.by}}]
      div
        .text-h6.text-primary.text-center Major Skills
        .text-subtitle2 {{listToText(Resume.skills.major)}}
      div
        .text-h6.text-primary.text-center Minor Skills
        .text-subtitle2 {{listToText(Resume.skills.minor)}}
      div
        .text-h6.text-primary.text-center Languages & Frameworks
        .text-subtitle2 {{listToText(Resume.skills.frameworks)}}
      div
        .text-h6.text-primary.text-center Software
        .text-subtitle2 {{listToText(Resume.skills.software)}}

    .col-12.col-md-8.col-lg-9
      .text-h5.text-primary.q-mb-md Work Experience
      .row.q-col-gutter-lg
        .col-12.col-md-6.col-lg-4(v-for="work in Resume.work")
          .text-center
            .text-h5.text-primary {{work.position}}
            .text-subtitle2 {{work.employer}} - {{work.duration}}
          .text-center.text-h6 Responsibilities
          ul.q-pl-sm.text-justify #[li.text-body2(v-for="resp in work.responsibilities") {{resp}}]
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
  min-height: 90vh

.space
    flex-grow: 1
.rc
  display: flex
  flex-direction: column

.noDecoList
  list-style-type: none
</style>
