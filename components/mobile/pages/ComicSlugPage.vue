<template>
  <div>
    <header-comic
      :comic="comic"
    />
    <comic-index
      :comic="comic"
      :chaps="list_chap"
      :videos="list_video"
    />
  </div>
</template>

<script>
import HeaderComic from "~/components/mobile/headers/HeaderComic";
import ComicIndex from "~/components/mobile/comics/ComicIndex";
export default {
  name: "ComicSlugPage",
  components: {
    HeaderComic,
    ComicIndex,
  },
  data () {
    return {
      comic: {
        id: 1508,
        name: "Nhím con vui vẻ - Pupi tốt bụng",
        description: '<p>Những c&acirc;u chuyện hay kh&ocirc;ng chỉ gi&uacute;p trẻ c&oacute; những ph&uacute;t gi&acirc;y thư gi&atilde;n thoải m&aacute;i, m&agrave; c&ograve;n mang đến những b&agrave;i học bổ &iacute;ch v&agrave; l&iacute; th&uacute;, bồi dưỡng t&acirc;m hồn v&agrave; tr&iacute; tuệ cho trẻ. Với những c&acirc;u chuyện như vậy, bộ s&aacute;ch&nbsp;<strong>&ldquo;Ươm mầm tr&iacute; tuệ&rdquo;</strong>&nbsp;sẽ l&agrave; người bạn đồng h&agrave;nh c&ugrave;ng bố mẹ tr&ecirc;n con đường nu&ocirc;i dạy con c&aacute;i.</p>\\r\\n<p>Ngo&agrave;i cuốn s&aacute;ch&nbsp;<strong>Ươm mầm tr&iacute; tuệ - Nai con đấu c&aacute; sấu</strong>, mời bạn t&igrave;m đọc th&ecirc;m&nbsp;Ươm&nbsp;mầm&nbsp;tr&iacute;&nbsp;tuệ - H&agrave; m&atilde; bụng to,&nbsp;Ươm&nbsp;mầm&nbsp;tr&iacute;&nbsp;tuệ - Bốn c&aacute;i tai thỏ,&hellip;</p>',
        slug: "nhim-con-vui-ve-pupi-tot-bung",
        count_like: 1,
        count_view: 10000,
        count_read: 10000,
        count_chap: 10,
        total_chap: 10,
        count_video: 1,
        total_video: 1,
        thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
        content_type: 'cmi_comic',
        mini_app: {
          id: 16,
          code: 'Truyện tranh',
          type: 'waka_comic',
          text_color: '#FA373E',
          background_color: '#F3E9D4'
        },
        categories: [
          {
            id: 5,
            name: 'Khác',
            parent_id: 0,
          },
          {
            id: 9,
            name: 'Tình cảm',
            parent_id: 5,
          },
          {
            id: 9,
            name: 'Manhua',
            parent_id: 5,
          },
          {
            id: 9,
            name: 'Cổ đại',
            parent_id: 5,
          },
        ],
        title: 'Nhím con vui vẻ - Pupi tốt bụng',
        ranking_top: 1,
        meta_data: {
          count_chap: 1,
          last_chap: {
            id: 19945,
            name: 'Chap 1',
            percent: 0,
            position: 10,
            duration: 180,
            watched: '00:10/03:00'
          }
        },
        authors: [
          {
            id: 1,
            name: 'Triệu Lãng'
          }
        ],
        publishing_houses: [
          {
            id: 1,
            name: 'Trí Đức'
          }
        ]
      },
      list_chap: [
        {
          id: 1,
          name: 'Chap 3',
          count_view: 4,
          price: 0,
          image: '',
          permission: {
            read: 1
          },
          order: 0,
          label: 'free'
        },
        {
          id: 2,
          name: 'Chap 4',
          count_view: 4,
          price: -1,
          image: '',
          permission: {
            read: 0
          },
          order: 0,
          label: 'vip'
        }
      ],
      list_video: [
        {
          id: 1,
          name: 'Chap 3',
          count_view: 4,
          price: 0,
          image: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_video/0/0/0/0/217.jpg?v=1&time=1665843996&w=360&h=360',
          permission: {
            read: 1
          },
          order: 0,
          label: 'free',
          duration: 197
        },
        {
          id: 2,
          name: 'Chap 4',
          count_view: 4,
          price: -1,
          image: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_video/0/0/0/0/216.jpg?v=1&time=1665844003&w=1360&h=1360',
          permission: {
            read: 0
          },
          order: 0,
          label: 'vip',
          duration: 197
        }
      ],
    }
  }
}
</script>
