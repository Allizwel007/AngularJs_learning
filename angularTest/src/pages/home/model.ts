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
        _this.http.get('http://rtq.chicheongweng.com:3000/securities', {params: params})
        .subscribe(res => {
            _this.dataList = this.decorateData(res)
            this.setTimer(_this)
        }, function(err) {
            // this.setTimer(_this)
            // messager.showMsg('error', err.message || err.detailMessage)
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
        var newStr = ''
        var count = 0
        num = num.toFixed(2)
        for (var i = num.indexOf('.') - 1;i >= 0;i--) {
          if (count % 3 == 0 && count != 0) {
            newStr = num.charAt(i) + ',' + newStr
          }else {
            newStr = num.charAt(i) + newStr; // 逐个字符相接起来
          }
          count++
        }
        // num = newStr + (num + '00').substr((num + '00').indexOf('.'), 3)
    
        return num
      }
}