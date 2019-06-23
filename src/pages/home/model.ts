import apiUrls from '../../common/apiUrl'

export default {
    getData(_this) {
        clearTimeout(_this.timer)
        let params: object = {
          _start: _this.pageSize * _this.currentPageNum,
          _limit: _this.pageSize
        }
        if (_this.sortOption.length > 0) {
          params['_sort'] = _this.sortOption[0].prop
          params['_order'] = _this.sortOption[0].dir.toUpperCase()
        }
        let that: any = this
        _this.http.get(apiUrls.getSecurities, {params: params})
        .subscribe(res => {
            _this.rows = that.decorateData(res)
            _this.totalCount = 30
            that.setTimer(_this)
        }, function(err) {
            that.setTimer(_this)
            _this.toastr.error('获取数据失败', '', {
              timeOut: 2000,
              positionClass: 'toast-top-center'
            })
            _this.totalCount = 0
        })
    },
    setTimer(_this) {
        _this.timer = setTimeout(() => {
          this.getData(_this)
        }, _this.timePeriod)
    },
    decorateData(list) {
        list.forEach((item, index) => {
            item.id = index + 1
            item.accumulated_turnover = this.setCommaInNumberFixed(item.accumulated_turnover)
            item.daily_turnover = this.setCommaInNumberFixed(item.daily_turnover)
        })
        return list
    },
    setCommaInNumberFixed(num) {
        let newStr: string = ''
        let count: number = 0
        num = num.toFixed(2)
        for (let i: number = num.indexOf('.') - 1;i >= 0;i--) {
          if (count % 3 == 0 && count != 0) {
            newStr = num.charAt(i) + ',' + newStr
          }else {
            newStr = num.charAt(i) + newStr; // 逐个字符相接起来
          }
          count++
        }
    
        return newStr + num.substr(num.indexOf('.'), 3)
      }
}