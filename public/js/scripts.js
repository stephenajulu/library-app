'use strict';

(function (document) {
  var tableFilter = function (array) {

    var _input = void 0;

    function selectLibrary(event) {
      _input = event.target;

      var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
      array.forEach.call(tables, function (table) {
        array.forEach.call(table.tBodies, function (tbody) {
          array.forEach.call(tbody.rows, _filter);
        });
      });
    }

    function _filter(row) {
      var text = row.textContent.toLowerCase(),
          val = _input.value.toLowerCase();
      row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
    }

    return {
      init: function init() {
        var selection = document.getElementById('jsFilter');
        selection.onchange = selectLibrary;
      }
    };
  }(Array.prototype);

  // const modBook = () => {
  //   const bookTable = document.getElementById('jsBooks')
  //   const editForm = document.getElementById('jsEditEntry')
  //   const submitEdit = document.getElementById('jsSubmitEdit')

  //   function update(element) {
  //     const bookRow = element.parentElement.parentElement
  //     editForm.elements[0].value = bookRow.id
  //     console.log(bookRow.id)
  //     console.log(editForm.elements[0])
  //   }

  //   bookTable.addEventListener('click', function(event) {
  //     const action = event.target.getAttribute('data-function')
  //     if (action === 'edit') {
  //       update(event.target)
  //     }
  //   })

  //   submitEdit.addEventListener('click', function(event) {
  //     event.preventDefault()
  //     console.log(event.target.form)
  //     // fetch('quotes', {
  //     //   method: 'put',
  //     //   headers: {'Content-Type': 'application/json'},
  //     //   body: JSON.stringify({
  //     //     'name': 'Darth Vader',
  //     //     'quote': 'I find your lack of faith disturbing.'
  //     //   })
  //     // })
  //   })
  // }

  document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
      var jsListing = document.getElementById('jsListing');
      var jsBooks = document.getElementById('jsBooks');
      if (jsListing) {
        tableFilter.init();
      }
      // if (jsBooks) {
      //   modBook()
      // }
    }
  });
})(document);