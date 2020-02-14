<template lang="pug">
    div(style="margin-top:10px;")
        b-container#SkAwEdList
            div.text-center
                h3(style="margin-bottom: 0px;") {{$data.resume.name}}
                small {{$data.resume.title}}
                br(style="margin-bottom: 5px;")
                b-row
                    b-col {{$data.resume.email}}
                    b-col {{$data.resume.phone}}
                    b-col {{$data.resume.address}}
            div.text-center
                h4 Current Career Objective
                p {{$data.resume.currentObjective}}
            b-row
                b-col(sm="12" md="6")
                    h5 Major Skills
                    ul
                        li(v-for="skill in $data.resume.majorSkills") {{skill}}
                b-col(sm="12" md="6")
                    h5 Minor Skills
                    ul
                        li(v-for="skill in $data.resume.minorSkills") {{skill}}
            b-row
                b-col(sm="12" md="6")
                    h5 Education
                    ul
                        li(v-for="edu in $data.resume.education") {{edu.institute}} - ({{edu.years}})
                            br
                            small {{edu.degree}}
                b-col(sm="12" md="6")
                    h5 Awards
                    ul
                        li(v-for="award in $data.resume.awards") {{award.award}}
                            br
                            small {{award.from}}
        b-container-fluid#SkAwEdList
            div.text-center(style="width: 95%; margin:auto")
                h4 Work Experience
                b-row
                    b-col(sm="12" lg="4" v-for="job in $data.resume.workExperience")#WorkEntry
                        table.table
                            tr
                                td Position
                                td {{job.job}}
                            tr
                                td Employer
                                td {{job.employer}} ({{job.location}})
                            tr
                                td During
                                td {{job.time}}
                            tr
                                td Responsibilities
                                td
                                    ul.text-left
                                        li(v-for="resp in job.resp" style="list-style-type: circle") {{resp}}

</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as ResumeData from '../resume';

@Component
export default class Resume extends Vue {
  data() {
    return {
      resume: null
    }
  }
  created() {
    document.title = "SolAZDev - Resume";
    this.$data.resume = ResumeData.default;
  }
}
</script>
<style lang="scss" scoped>
#WorkEntry {
  border-bottom: 1px solid $PipText;
  // border-radius: 5px;
  // margin: 1px;
}
#SkAwEdList {
  h5,
  h4 {
    margin-top: 20px;
  }
  ul {
    li {
      list-style-type: none;
      // padding-bottom: 3px;
    }
    margin: 0;
    padding: 0;
  }
  table {
    color: $PipSel;
    tr {
      td {
        border-top: none;
      }
    }
  }
}
</style>