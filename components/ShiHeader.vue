<template>
  <div id="outer-box">
    <div id="head-box">
      <div id="left-box">
        <img id="left-image" src="/img/dongban3.png" />
      </div>

      <div id="right-box">
        <div id="right-upper-box">
          <div id="info-box">
            <div id="name">Shizue</div>
            <div class="row">Male | 2001 | Master's Degree</div>
            <div class="row">ENFP | Libra</div>
            <div class="row">NanJing University | DisLab</div>
            <div class="row">Cloud-Edge Systems · Video Stream Analytics</div>
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
                    <div class="row">Bio</div>
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
// @import url("~/assets/css/ShiHeader.css");
@use "~/assets/scss/ShiHeader.scss";
</style>
