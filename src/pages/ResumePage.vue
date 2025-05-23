<template lang="pug">
q-page
  .print-hide.q-pb-xl

    .row.q-col-gutter-md.resumeFile.q-px-lg-xl.q-mb-lg-lg.q-px-xs-md
      .col-12.col-md-4.col-lg-3.column.q-pr-lg-md
        .row.q-col-gutter-sm
          .col-12.text-center.q-mt-lg
            .text-h4.text-primary.text-center(:class="$q.screen.lt.md?'text-h6':''") {{ resumeFile.name }}
            //- .text-h6.text-primary.text-center(:class="$q.screen.lt.md?'text-body1':''")
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
          .col-12.col-lg-6(v-for="work in (isItGDC?WorkExperienceByCategory:resumeFile.work)")
            q-card.no-shadow.q-card-experience
              q-card-section.q-pb-none
                .text-center
                  .text-h6.text-primary {{ work.position }} #[span.text-white.text-subtitle2 at {{ work.employer }} ]
                  .text-white.text-subtitle2 {{work.time}}
              q-card-section.q-pt-md
                .text-center.text-body2 Responsibilities & Achievements
                ul.q-pl-sm.q-mt-xs.q-mb-none.text-justify.q-gutter-y-xs
                  li.text-subtitle2(v-for="resp in work.responsibilities" v-html="resp")


    q-page-sticky(position='top-right', :offset='[18,18]', expand, v-if="$q.screen.gt.sm")
      q-btn-dropdown(icon="filter_alt", color='primary' rounded fab-mini)
        q-list.q-mt-sm
          q-item(clickable v-for='type of categories')
            q-item-section(avatar) #[q-checkbox(left-label, v-model='selectedCategory' :val='type' :checked-icon='type.icon')]
            q-item-section #[q-item-label {{capitalize(type.name)}}]
          q-item(clickable, v-close-popup @click="Print()")
            q-item-section.items-center(avatar) #[q-icon(name='print')]
            q-item-section Print

  //- Print Version
  .print-only(style="margin-top:-2rem")
    .row.q-px-md
      .col-4.column.q-gutter-y-md.q-mb-sm.q-pr-sm
        .q-pr-sm.text-center
          .text-h6.text-primary {{ resumeFile.name }}
          //- .text-subtitle1.text-primary {{ YourNext }}
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
        .column.wExp.q-gutter-y-md(v-for="work in WorkExperienceByCategory")
          div
            .row
              .col.text-body2.text-weight-bold.text-primary {{ work.position }} #[span.text-weight-regular.text-caption at {{ work.employer }} - {{ work.time }}]
            ul.column
              li(v-for="resp in work.responsibilities" v-html="resp")


</template>
<script lang="ts" setup>
import resume from 'src/data/resume';
import { computed, ref ,onMounted} from 'vue';
import {format } from 'quasar';

const resumeFile = ref(resume);
const selectedCategory = ref([] as any[]);
const filterOnMain = ref(false);
const printJobLimit = 5;
const categories = resume.categories;
const isItGDC = computed(() => {
  const date = new Date();
  //Extended GDC Period (3 More Weeks?!)
  return (date.getMonth()+1>2 && date.getMonth()+1<5) && (date.getDate()>=9 || date.getDate()<=15)
});

function capitalize(str:string):string {return format.capitalize(str);}
function Print():void { setTimeout(() => { print(); }, 120);}

// onMounted(()=>{category.value=(isItGDC.value?'game':'');})

const WorkExperienceByCategory = computed(() => {
  if (selectedCategory.value.length==0) return resume.work;
  const work: any[] = [];
  resume.work.forEach(w=>{
    selectedCategory.value.forEach(type=>{
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      if(w.type.includes(type.name) && !work.includes(w)){work.push(w);}
    })
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return work;
});

// });

function listToText(arr: Array<string>, separator = ' | ') {
  return arr.toString().replace(/,/g, separator);
}

function objListToString(
  obj: { name: string; type: string[] }[],
  filtered = false
) {
  let final = new Array<string>();
  obj.forEach((o) => {
    if (selectedCategory.value.length==0 || !filtered) final.push(o.name);
    else {
      // eslint-disable-next-line
      categories.forEach(cat=>{
        if (o.type.includes(cat.name) && !final.includes(o.name)) final.push(o.name);
      })
    }
  });
  return listToText(final);
}

function BoldenSkills(
  skills: Array<{ name: string; type: string[] }>,
  responsibilities: Array<string>
) {
  let fResp = Array.from(responsibilities);
  skills.forEach((skill) => {
    let bolden = false;
    fResp.forEach((resp) => {
      if (resp.includes(skill.name) || !bolden) {
        resp = resp.replace(skill.name, '<b>' + skill.name + '</b>');
        bolden = true;
      }
    });
  });
  return fResp;
}

function PrepareJob(
  work: Array<{
    position: string;
    employer: string;
    time: string;
    type: string[];
    responsibilities: string[];
  }>
) {
  let pWork = Array.from(work);
  pWork.forEach((w) => {
    w.responsibilities = BoldenSkills(
      resumeFile.value.software,
      w.responsibilities
    );
    w.responsibilities = BoldenSkills(
      resumeFile.value.frameworks,
      w.responsibilities
    );
    // console.log(w.responsibilities);
  });
  return pWork;
}
</script>
<style lang="sass">
@use 'sass:color';
// $fullBlue: transparentize($primary, 1)
// $halfBlue: transparentize($primary, .5)

$fullBlue: color.scale($primary, $alpha: -100%)
$halfBlue: color.scale($primary, $alpha: -50% )

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
  background: linear-gradient(90deg, $primary 35%, $fullBlue 90%)

.rtlGradient
  color: white
  padding-right: 1rem
  background: $primary
  background: linear-gradient(270deg, $primary 35%, $fullBlue 80%)

.centerGradient
  color: white
  text-align: center
  background: linear-gradient(90deg, $fullBlue 0%, $primary 30%, $primary 65%, $fullBlue 100%)

.q-card
  min-height: unset

.workExp
  // min-height: 65vh

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
      font-size: 0.65rem
      text-align: justify
      hyphens: none

.vSeparator
  border: 1px solid $halfBlue
  margin: 5px 2px 1vh 0px !important

.hRSeparator
  border-bottom: 2px solid $halfBlue
  margin: 0px 0px 0px 5% !important

.hLSeparator
  border-bottom: 2px solid $halfBlue
  margin: -4px 5% 0px 0px !important
</style>
