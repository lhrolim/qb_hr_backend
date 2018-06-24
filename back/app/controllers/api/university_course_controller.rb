class Api::UniversityCourseController < ActionController::Base
  include Response
  include ExceptionHandler

  # PAGE_SIZE = 10

  def index
    un_id = params["university_id"]
    offers = Course.joins(:university).where(:universities => {"id": un_id})
    json_response(offers)
  end
end
