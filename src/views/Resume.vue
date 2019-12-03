<template lang="pug">
    b-container#SkAwEdList
        div.text-center
            h3(style="margin-bottom:0px;") Carlos E. Orama De Jesus
            small Game & Junior Web Developer
            br(style="margin-bottom:5px;")
            b-row
                b-col() SolAZDev@gmail.com
                b-col() 939-244-2231
                b-col() PO Box 1126, Gurabo, PR 00778
        // br(style="margin-bottom:5px;")
        div.text-center
            h4 Current Career Objective
            p Game designer and developer, who’s looking for a position where I can use the best of my abilities to push the projects forward, and meet or even exceed the company’s goals and expectations proficiently. With the ability to reuse existing bases and creating new models, be it for Games, Software, 3D Models, or Web Pages. Looking for opportunities for personal contribution and professional growth.
        // br(style="margin-bottom:5px;")
        b-row
            b-col(sm="12" md="6")
                h5 Major Skills
                ul
                    li Highly Motivated
                    li Strong Attention to Detail
                    li Front-End Web Design & Development
                    li C#, Typescript, Bash, Linux OS
                    li 3D Modeling & Printing
                    li Game Development with Unity
                    li Set & Level Design
                    li Video Editing & Key-frame Animation
                    li Fully Bilingual: English & Spanish
            b-col(sm="12" md="6")
                h5 Minor Skills
                ul 
                    li UX & UI Design
                    li Code Documentation with Doxygen
                    li Story Writing and Storyboarding
                    li Multi-Phase Planning
        b-row
            b-col(sm="12" md="6")
                h5 Education
                ul
                    li Atlantic University College (2011-2015)
                        br
                        small Bachelor’s Dregree in Video Gqame Design
            b-col(sm="12" md="6")
                h5 Awards
                ul
                    li Eagle Scout Rank 
                        br
                        small Boy Scouts of America (T432)
                    li Best Use of Theme Overall (Local)
                        br
                        small PR Global Game Jam 2018



</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Resume extends Vue {
  @Prop() private msg!: string;
}
</script>
<style lang="scss" scoped>
    #SkAwEdList{
        h5, h4{
            margin-top:20px;
        }
        ul{
            li{
                list-style-type: none;
                // padding-bottom: 3px;
            }
                margin: 0;
                padding: 0;
        }
    }
    .row, .col{
        // margin-top:20px;
    }
</style>