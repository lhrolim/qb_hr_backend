ApiPagination.configure do |config|
 # If you have both gems included, you can choose a paginator.
 config.paginator = :will_paginate 
 config.total_header = 'x-total'
 config.per_page_header = 'x-per-page'
 config.page_header = 'x-page'
 config.page_param = :page
 config.per_page_param = :per_page
 
end