module OfferHelper
  def build_search_criteria(params)
    unscoped = Offer.unscoped.includes(:university, :course).joins(:university, :course)

    api_hash = params.permit("university_id", "course_id", "kind", "level", "shift", "discount_percentage_min", "offered_price_max", "course_name").to_h
    courses_hash = {}

    courses_hash.store("kind", params[:kind]) unless params[:kind] == nil
    courses_hash.store("level", params[:level]) unless params[:level] == nil
    courses_hash.store("shift", params[:shift]) unless params[:shift] == nil
    courses_hash.store("name", params[:course_name]) unless params[:course_name] == nil
    api_hash.delete "course_name"
    api_hash.delete "shift"
    api_hash.delete "kind"
    api_hash.delete "shift"

    unless courses_hash.empty?
      api_hash["courses"] = courses_hash
      # unscoped = unscoped.joins(:course)
    end

    discount_min = api_hash.delete "discount_percentage_min"
    offered_max = api_hash.delete "offered_price_max"

    discount_min ||= 0
    offered_max ||= 1000
    unscoped = unscoped.where(api_hash)

    unscoped.where("discount_percentage >= ? AND offered_price <= ?", discount_min, offered_max)
  end
end
