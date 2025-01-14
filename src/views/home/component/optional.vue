<template>
  <uni-view class="list_wrap"
    ><uni-view class="list_top"
      ><uni-view class="_left"
        ><uni-view class="_item"
          ><uni-text class="font-11 color-gray"><span>现货</span></uni-text
          ><uni-image>
            <div
              style="
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA15pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LmE4ZDQ3NTM0OSwgMjAyMy8wMy8yMy0xMzowNTo0NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iQkUxQUFDRTIyQTZDRkMwNkUyNTY3NUIwNEY1N0QzMzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEZGQ0U4NTM0OENFMTFFRTgyNDU4MDk5MEFDOEYyRUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEZGQ0U4NTI0OENFMTFFRTgyNDU4MDk5MEFDOEYyRUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2QxODZmNDItMTIwZC0wODRlLTgxYTktMjNkYzI4MDNmODEyIiBzdFJlZjpkb2N1bWVudElEPSJCRTFBQUNFMjJBNkNGQzA2RTI1Njc1QjA0RjU3RDMzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkpVr/0AAAK3SURBVHjabJNbaxNBFMfntpu90aS5NMkmEIuvfgDf9VWwvgj6lcRX32xB6GsprYIgPhZqRQQhiiAUsTTGW9Om7e5md8f/mWSjrU4YJnNmz2/+5zJ8fHzqaq2dTOcSq2TToYUQmlbNLo6cX9yLmUVKGdm2fWYpK1P9fv9BlmXXJlm6nKbpIv47MzjHYPkl7GUo15lZHcf5VK/X19vt9kPx7cf3+6fnZ9fzPO8A5gOESyUXUhog/hOdZUwbIO2hKFFK5QUYfmw8Hl8djUb3IKwmXNf9BaOFDSIWBjCZTBj2DI6aHMhGkwYioXMbq6C9ZVmazsi3VCq9g89ItFudRyXb/RwnKZukOedC0cTtBBE8Y6SSoBKOCvFSBNxM+i5JUw4q84LgQ6VafY71WPV6vS14d6Ikvgt1TSoQbuOkiNSCywq1pEZQnvO8sOmz83Neq9W+NJvNrUaj8RKFSpTjWe9bYftJmmfOcDhciaKoYdKgJJXK5JDgJr8zMAHpUqqT53kDADfCMFz3XO8jGRUVt1z2X0vZoxzxg4ODlTiO64rblKN5PglEk1QSkGyIaBC2w41Op7PmOu7bXE8jMFCqQRA4r7rdLiWSQ/HtaJLUC+ci/L8UMt/3DyuVyma3G64C+KboAnMZosHtSJ0winehmA754fDrHShehJppk087g7qBwzZcWFjYbLVaa77n79F5mqXT9sNPcSiV0AflBu67zu5y7wq9Lnd/f/+W5wc+1HHqUYTObcv6CdgmCvzYday94glKqeYPQv1p4NkLgTOae6cM2UtLS8HR0dFNvBaHC1P1URAEz6Y5tPbiJGOeLdnlMYcSrMivbQuGNnmBMO0kSfTJyckNYakYCrfxDFeDwN0xzupf4Lz6BCpmsfe8Evq19hShjwaDQR8tFkHhdrVaNkXJZ9/9b/wWYADKo1iDXkpdCwAAAABJRU5ErkJggg==');
                background-position: 0% 0%;
                background-size: 100% 100%;
              "
            ></div>
            <span></span
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA15pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LmE4ZDQ3NTM0OSwgMjAyMy8wMy8yMy0xMzowNTo0NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iQkUxQUFDRTIyQTZDRkMwNkUyNTY3NUIwNEY1N0QzMzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEZGQ0U4NTM0OENFMTFFRTgyNDU4MDk5MEFDOEYyRUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEZGQ0U4NTI0OENFMTFFRTgyNDU4MDk5MEFDOEYyRUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2QxODZmNDItMTIwZC0wODRlLTgxYTktMjNkYzI4MDNmODEyIiBzdFJlZjpkb2N1bWVudElEPSJCRTFBQUNFMjJBNkNGQzA2RTI1Njc1QjA0RjU3RDMzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkpVr/0AAAK3SURBVHjabJNbaxNBFMfntpu90aS5NMkmEIuvfgDf9VWwvgj6lcRX32xB6GsprYIgPhZqRQQhiiAUsTTGW9Om7e5md8f/mWSjrU4YJnNmz2/+5zJ8fHzqaq2dTOcSq2TToYUQmlbNLo6cX9yLmUVKGdm2fWYpK1P9fv9BlmXXJlm6nKbpIv47MzjHYPkl7GUo15lZHcf5VK/X19vt9kPx7cf3+6fnZ9fzPO8A5gOESyUXUhog/hOdZUwbIO2hKFFK5QUYfmw8Hl8djUb3IKwmXNf9BaOFDSIWBjCZTBj2DI6aHMhGkwYioXMbq6C9ZVmazsi3VCq9g89ItFudRyXb/RwnKZukOedC0cTtBBE8Y6SSoBKOCvFSBNxM+i5JUw4q84LgQ6VafY71WPV6vS14d6Ikvgt1TSoQbuOkiNSCywq1pEZQnvO8sOmz83Neq9W+NJvNrUaj8RKFSpTjWe9bYftJmmfOcDhciaKoYdKgJJXK5JDgJr8zMAHpUqqT53kDADfCMFz3XO8jGRUVt1z2X0vZoxzxg4ODlTiO64rblKN5PglEk1QSkGyIaBC2w41Op7PmOu7bXE8jMFCqQRA4r7rdLiWSQ/HtaJLUC+ci/L8UMt/3DyuVyma3G64C+KboAnMZosHtSJ0winehmA754fDrHShehJppk087g7qBwzZcWFjYbLVaa77n79F5mqXT9sNPcSiV0AflBu67zu5y7wq9Lnd/f/+W5wc+1HHqUYTObcv6CdgmCvzYday94glKqeYPQv1p4NkLgTOae6cM2UtLS8HR0dFNvBaHC1P1URAEz6Y5tPbiJGOeLdnlMYcSrMivbQuGNnmBMO0kSfTJyckNYakYCrfxDFeDwN0xzupf4Lz6BCpmsfe8Evq19hShjwaDQR8tFkHhdrVaNkXJZ9/9b/wWYADKo1iDXkpdCwAAAABJRU5ErkJggg=="
              draggable="false"
            /> </uni-image></uni-view
        ><uni-text class="font-11 color-gray"><span>最新价</span></uni-text></uni-view
      ><uni-view class="_right"
        ><uni-text class="font-11 color-gray"><span>24h 涨跌幅</span></uni-text></uni-view
      ></uni-view
    ><uni-view class="select"
      ><uni-view class="select_list"
        ><uni-view class="select_list_item" style="margin-bottom: 15px"
          ><uni-view class="_row flex align-center justify-between"
            ><uni-text class="font-14 color-black font-weight"><span>INJUSDT</span></uni-text
            ><uni-view class="check-box"
              ><uni-image class="checkImage">
                <div
                  style="
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                    background-position: 0% 0%;
                    background-size: 100% 100%;
                  "
                ></div>
                <span></span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                  draggable="false"
                /> </uni-image></uni-view></uni-view
          ><uni-text class="font-13 font-weight _centerText price_up"><span>21.91</span></uni-text
          ><uni-text class="font-11 font-weight price_up"><span>4.98% </span></uni-text></uni-view
        ><uni-view class="select_list_item" style="margin-bottom: 15px"
          ><uni-view class="_row flex align-center justify-between"
            ><uni-text class="font-14 color-black font-weight"><span>SOLUSDT</span></uni-text
            ><uni-view class="check-box"
              ><uni-image class="checkImage">
                <div
                  style="
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                    background-position: 0% 0%;
                    background-size: 100% 100%;
                  "
                ></div>
                <span></span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                  draggable="false"
                /> </uni-image></uni-view></uni-view
          ><uni-text class="font-13 font-weight _centerText price_up"><span>207.64</span></uni-text
          ><uni-text class="font-11 font-weight price_up"><span>4.37% </span></uni-text></uni-view
        ><uni-view class="select_list_item" style="margin-bottom: 15px"
          ><uni-view class="_row flex align-center justify-between"
            ><uni-text class="font-14 color-black font-weight"><span>SHIBUSDT</span></uni-text
            ><uni-view class="check-box"
              ><uni-image class="checkImage">
                <div
                  style="
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                    background-position: 0% 0%;
                    background-size: 100% 100%;
                  "
                ></div>
                <span></span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                  draggable="false"
                /> </uni-image></uni-view></uni-view
          ><uni-text class="font-13 font-weight _centerText price_up"><span>0.00</span></uni-text
          ><uni-text class="font-11 font-weight price_up"><span>3.88% </span></uni-text></uni-view
        ><uni-view class="select_list_item" style="margin-bottom: 15px"
          ><uni-view class="_row flex align-center justify-between"
            ><uni-text class="font-14 color-black font-weight"><span>TRXUSDT</span></uni-text
            ><uni-view class="check-box"
              ><uni-image class="checkImage">
                <div
                  style="
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                    background-position: 0% 0%;
                    background-size: 100% 100%;
                  "
                ></div>
                <span></span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                  draggable="false"
                /> </uni-image></uni-view></uni-view
          ><uni-text class="font-13 font-weight _centerText price_up"><span>0.26</span></uni-text
          ><uni-text class="font-11 font-weight price_up"><span>3.18% </span></uni-text></uni-view
        ><uni-view class="select_list_item" style="margin-bottom: 15px"
          ><uni-view class="_row flex align-center justify-between"
            ><uni-text class="font-14 color-black font-weight"><span>FILUSDT</span></uni-text
            ><uni-view class="check-box"
              ><uni-image class="checkImage">
                <div
                  style="
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                    background-position: 0% 0%;
                    background-size: 100% 100%;
                  "
                ></div>
                <span></span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                  draggable="false"
                /> </uni-image></uni-view></uni-view
          ><uni-text class="font-13 font-weight _centerText price_up"><span>5.37</span></uni-text
          ><uni-text class="font-11 font-weight price_up"><span>3.51% </span></uni-text></uni-view
        ><uni-view class="select_list_item" style="margin-bottom: 15px"
          ><uni-view class="_row flex align-center justify-between"
            ><uni-text class="font-14 color-black font-weight"><span>AVAXUSDT</span></uni-text
            ><uni-view class="check-box"
              ><uni-image class="checkImage">
                <div
                  style="
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg==');
                    background-position: 0% 0%;
                    background-size: 100% 100%;
                  "
                ></div>
                <span></span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABn0lEQVR4Xu2YvU7DMBSFTVl4KHgKRp4iNoK1Q1hggZ0RiZdAQmLiEVDHTK3Y2sQtVIrxvSVSsK8dx0klC/WTjtqkvj5HiX+SMnbg3zNVE5atz5iQtyyTrywrZ4xXKxR8h3P4m24DbffGVJ0wXl5r44WWCtQCa6B2VLg8150XhGGoCuxjOOpId5YTBrHKsc84dKEon4lOhwn6jAo17pUxlZt2fnZjpiY6Gkt1+JjC2TRoAIeqCJt9orwiivcj8PICCxmv5lZhpCaiUvdvW7XaKHXz8m39zsDLu3iK9SlRFCUI8/i+VQ3LTW21QYGnEy7vrIIImWGAB32lzHY7aU8nsA9ZBf1EhYFjOG+2RYGnEyE/rIKW0cXTF8rVee8wIPB0wuXSKvgVBPGZRIVBaU8ngYFMs/gwXYE6bhllenxJnw8LU3Xcso5BTYWafdZ/jnuFAXkHdcC0p0I19A6D8k37wIWRChUXpupYGHtsHWDebAvwGRWmc+sAktpcgeQeP4CkHtAaknqERVJ7yEeSeg1qkc6LYoukXqXbJPNnw4FE+AFqzUN+Qvhk1gAAAABJRU5ErkJggg=="
                  draggable="false"
                /> </uni-image></uni-view></uni-view
          ><uni-text class="font-13 font-weight _centerText price_up"><span>39.79</span></uni-text
          ><uni-text class="font-11 font-weight price_up"><span>3.27% </span></uni-text></uni-view
        ></uni-view
      ><uni-view class="select_button flex align-center justify-center" style="margin-bottom: 70px"
        ><uni-view
          class="fui-button__wrap"
          style="
            width: 13.75rem;
            height: 2.4375rem;
            margin: 0px;
            border-radius: 0.3125rem;
            background: var(--blue);
          "
          ><uni-button
            id=""
            class="fui-button"
            app-parameter=""
            scope=""
            style="
              width: 13.75rem;
              height: 2.4375rem;
              line-height: 2.4375rem;
              background: var(--blue);
              border-width: 0px;
              border-color: var(--blue);
              border-radius: 0.3125rem;
              font-size: 0.875rem;
              color: rgb(255, 255, 255);
            "
            >新增自选</uni-button
          ></uni-view
        ></uni-view
      ></uni-view
    ><uni-view class="list"></uni-view
  ></uni-view>
</template>
