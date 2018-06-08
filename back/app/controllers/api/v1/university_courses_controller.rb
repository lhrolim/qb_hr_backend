module Api
  module V1
    class UniversityCoursesController < ApiController
      PER_PAGE = 10
      
      def index
        un_id = params["university_id"]
        offers = Course.joins(:university).where(:universities => {"id": un_id})
        
        paginate json: offers, per_page: PER_PAGE

      end
    end
  end
end