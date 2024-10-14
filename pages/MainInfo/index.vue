<template>
  <div id="outer-box">
    <div id="inner-box">
      <el-scroller max-height="2000px">
        <!-- <div id="inner-upper-box">
        </div> -->
        <MainHeader> </MainHeader>

        <div id="inner-down-box">
          <ul>
            <li>
              <div class="row">This is a Short Biology</div>
            </li>
            <li>
              <div class="row">Getting my Master's Degree at NJU. Majoring in Computer Science.</div>
            </li>
            <li>
              <div class="row">Majoring in Infomation Security at Harbin Institude of Technology and get Bachelor's Degree there.</div>
            </li>
            <li>
              <div class="row"></div>
            </li>
          </ul>
        </div>
      </el-scroller>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/MainInfo.scss";
</style>
