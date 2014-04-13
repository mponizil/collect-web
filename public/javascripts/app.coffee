window.collect = collect =
  pages: items: {}

collect.pages.items.index = ->

  $('[data-item-delete]').on 'click', ->
    $item = $(this).parents('[data-item-id]')
    id = $item.data('item-id')

    do ($item) ->
      $.ajax
        method: 'DELETE'
        url: "/items/#{id}"
        complete: (xhr, status) -> $item.slideUp -> $item.remove()

