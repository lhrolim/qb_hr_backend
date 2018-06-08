module OfferHelper
  def build_search_criteria(params)
    unscoped = Offer.unscoped
      .includes(:course, :university)
      .joins(:course, :university)

    permitted = params
      .permit([:format, :university, :course, :kind, :level, :shift, :discount_percentage_min, :offered_price_max])
    
    api_hash = permitted.to_h || {}
    api_hash.delete(:format)

    courses_hash = Hash.new
    courses_hash.store("name", api_hash.delete("course")) unless !api_hash.has_key? ("course")
    courses_hash.store("kind", api_hash.delete("kind")) unless !api_hash.has_key? ("kind")
    courses_hash.store("level", api_hash.delete("level")) unless !api_hash.has_key? ("level")
    courses_hash.store("shift", api_hash.delete("shift")) unless !api_hash.has_key? ("shift")

    university_hash = Hash.new
    university_hash.store("name", api_hash.delete("university")) unless !api_hash.has_key? ("university")


    unless courses_hash.empty?
      api_hash["courses"] = courses_hash
    end

    unless university_hash.empty?
      api_hash["universities"] = university_hash
    end

    discount_min = api_hash.delete "discount_percentage_min"
    offered_max = api_hash.delete "offered_price_max"

    offered_max ||= 1000

    unscoped = unscoped.where(api_hash)

    unscoped.where("discount_percentage >= ?", discount_min) unless discount_min == nil
    unscoped.where("offered_price <= ?", offered_max)
  end
end
