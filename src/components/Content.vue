<template>
  <li class="content">
    <div
      class="content__thumbnail">
      <div
        class="content__thumbnail-img"
        :style="{backgroundImage: `url(${content.Poster !== `N/A` ? content.Poster : noImageUrl})`}"></div>
    </div>
    <div class="content__text-box">
      <h2 class="text-box__title">
        {{ content.Title }}
      </h2>
      <span class="text-box__year">{{ content.Year }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      noImageUrl: 'https://soco.seoul.go.kr/images/contents/no_img_han2.png'
    }
  },
}
</script>

<style lang="scss" scoped>
  .content {
          width: 23.125%;
          margin-right: 2.5%;
          margin-bottom: 20px;
          &:nth-child(4n) {
            margin-right: 0;
          }
          &__thumbnail {
            overflow: hidden;
            &-img {
              // 반응형 시 이미지 종횡비 유지
              height : 0;
	            padding-top : calc(244 / 200 * 100%); 
              background-position: center;
              background-size: cover;
              transition: 250ms ease-out;
              &:hover {
              transform: scale(1.05);
            }
            }
          }
          &__text-box {
            padding: 20px 0;
            .text-box__title {
              margin-bottom: 10px;
              font-size: 18px;
              line-height: normal;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .text-box__year {
              font-size: 16px;
            }
          }
        }
</style>