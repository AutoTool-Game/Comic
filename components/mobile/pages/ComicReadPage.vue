<template>
  <div>
    <header-comic-read
      :content="content"
    />
    <read-index
      :content="content"
    />
  </div>
</template>

<script>
import HeaderComicRead from "~/components/mobile/headers/HeaderComicRead";
import ReadIndex from "~/components/mobile/comic-reads/ReadIndex";
export default {
  name: "ComicReadPage",
  components: {
    HeaderComicRead,
    ReadIndex
  },
  data () {
    return {
      content: {
        comic_id: 27,
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
        has_video: 1,
        name: 'Chương 2',
        id: 39,
        list: [
          "/images/comics/0000.jpg",
          "/images/comics/0001.jpg",
          "/images/comics/0002.jpg",
          "/images/comics/0003.jpg",
          "/images/comics/0004.jpg",
          "/images/comics/0005.jpg",
          "/images/comics/0006.jpg",
          "/images/comics/0007.jpg",
          "/images/comics/0008.jpg",
          "/images/comics/0009.jpg",
          "/images/comics/0010.jpg",
          "/images/comics/0011.jpg",
          "/images/comics/0012.jpg",
          "/images/comics/0013.jpg",
          "/images/comics/0014.jpg",
          "/images/comics/0015.jpg",
          "/images/comics/0016.jpg",
          "/images/comics/0017.jpg",
          "/images/comics/0018.jpg",
        ],
      }
    }
  }
}
</script>
