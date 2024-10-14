<template>
  <div id="header-outer-box">
    <div id="head-box">
      <div id="left-box">
        <!-- <NuxtImg id="left-image" src="/img/dongban.png" /> -->
        <img id="left-image" src="/img/dongban.png" />
      </div>

      <div id="right-box">
        <div id="right-upper-box">
          <div id="info-box">
            <div id="name">Shizue 静江</div>
            <div class="row">Male丨2001丨Master's Degree</div>
            <div class="row">ENFP丨Libra</div>
            <div class="row">NanJing University丨DisLab</div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row">Contact me by: hitskyrim@qq.com</div>
          </div>

          <div id="right-image-box">
            <!-- <NuxtImg id="right-image" src="/img/nju.png" /> -->
            <img id="right-image" src="/img/nju.png" />
          </div>
        </div>
        <div id="right-down-box">
          <table>
            <tbody>
              <tr>
                <td class="cell">
                  <NuxtLink to="/MainInfo">
                    <div class="row">Biology</div>
                  </NuxtLink>
                </td>
                <td class="split"></td>

                <td class="cell">
                  <NuxtLink to="/MainEducation">
                    <div class="row">Technology</div>
                  </NuxtLink>
                </td>
                <td class="split"></td>

                <td class="cell">
                  <NuxtLink to="/MainHonor">
                    <div class="row">Honors</div>
                  </NuxtLink>
                </td>
                <td class="split"></td>

                <td class="cell">
                  <NuxtLink to="/MainInterest">
                    <div class="row">Interests</div>
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/MainHeader.scss";
</style>
