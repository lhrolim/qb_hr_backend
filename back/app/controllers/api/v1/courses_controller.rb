module Api
  module V1
    class CoursesController < ApiController
      PER_PAGE = 10
      
      def index
        courses = Course.unscoped
        courses = courses.where("name like ?", "%#{params["name"]}%") unless params["name"] == nil?
        
        paginate json: courses, per_page: PER_PAGE
        
      end

      def show
        json_response(Course.find(params[:id]))
      end
    end
  end
end