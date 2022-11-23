<template>
  <div class="min-h-screen bg-[#1C1C1E] rounded-tl-3xl rounded-tr-3xl p-4">
    <div class="my-3">
      <div
        v-for="(item, index) in listComic"
        :key="index"
      >
        <library-comic
          :comic="item"
          :title-active="titleActive"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LibraryComic from "~/components/mobile/comics/LibraryComic";
export default {
  name: "LibraryIndex",
  components: {
    LibraryComic
  },
  data () {
    return {
      listComic: [
        {
          id: 1508,
          name: "Nhím con vui vẻ - Pupi tốt bụng",
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
          ]
        },
        {
          id: 1508,
          name: "Nhím con vui vẻ - Pupi tốt bụng",
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
          ranking_top: 2,
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
          ]
        },
        {
          id: 1508,
          name: "Nhím con vui vẻ - Pupi tốt bụng",
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
          ranking_top: 3,
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
          ]
        },
        {
          id: 1508,
          name: "Nhím con vui vẻ - Pupi tốt bụng",
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
          ranking_top: 4,
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
          ]
        },
        {
          id: 1508,
          name: "Nhím con vui vẻ - Pupi tốt bụng",
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
          ranking_top: 5,
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
          ]
        },
      ],
      listLibraries: [
        {
          name: 'Đang đọc',
          value: 'reading'
        },
        {
          name: 'Đang xem',
          value: 'watching'
        },
        {
          name: 'Đang theo dõi',
          value: 'following'
        },
        {
          name: 'Mua lẻ',
          value: 'buy_content'
        }
      ]
    }
  },
  computed: {
    titleActive () {
      if (this.$route.query.title_cate === undefined) {
        const value = this.listLibraries.filter(rt => rt.value === 'reading');
        return value[0].value;
      }
      const value = this.listLibraries.filter(rt => rt.value === this.$route.query.title_cate);
      return value[0].value;
    }
  }
}
</script>
