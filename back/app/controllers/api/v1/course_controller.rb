module Api
  module V1
    class CourseController < ActionController::Base
      include Response
      include ExceptionHandler

      PAGE_SIZE = 10

      def index
        course = Course.unscoped
        course = course.where("name like ?", "%#{params["name"]}%") unless params["name"] == nil?

        courses = course.take(PAGE_SIZE)

        respond_to do |format|
          format.json do
            json_response(courses)
          end
        end
      end

      def show
        json_response(Course.find(params[:id]))
      end
    end
  end
end