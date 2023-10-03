import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState, type Dispatch, type FC, type SetStateAction } from "react";
import { ArticleLoading, TagLoading } from "~/component/loading";
import { ManageData, Select } from "~/component/miniComponent";
import useOnScreen from "~/hooks/useOnScreen";
import { api } from "~/utils/api";
import {
  type TrendingArticleTypes,
  type TrendingTagsTypes,
} from "~/utils/context";
import ExploreMainComponentNavigation from "./ExploreMainComponentNavigation";

const ExploreMainComponent = () => {
  const { slug } = useRouter().query;
  const [filter, setFilter] = useState<
    "This week" | "Any" | "This month" | "This year"
  >("Any");
  const trendingTagsData = api.tags.getTredingTags.useQuery(
    {
      limit: 6,
      variant: filter.toLowerCase().replace("this ", "") as
        | "week"
        | "month"
        | "any"
        | "year",
    },
    {
      enabled: slug === undefined ? true : slug.includes("tags"),
      refetchOnWindowFocus: false,
    }
  );
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = api.posts.trendingArticles.useInfiniteQuery(
    {
      limit: 6,
      variant: filter.toLowerCase().replace("this ", "") as
        | "week"
        | "month"
        | "any"
        | "year",
    },
    {
      enabled:
        slug === undefined
          ? true
          : slug.includes("tags") || slug.includes("articles"),
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  const followingTagsData = api.tags.getFollowingTags.useQuery(
    {
      limit: 6,
      variant: filter.toLowerCase().replace("this ", "") as
        | "week"
        | "any"
        | "month"
        | "year",
    },
    {
      enabled: slug === undefined ? true : slug.includes("tags-following"),
      refetchOnWindowFocus: false,
    }
  );
  const { data: followingData, isLoading: followingLoading, fetchNextPage: followingNextPage, isFetchingNextPage: followingIsFetchingNextPage, hasNextPage: followingHasNextPage } = api.posts.getFollowingArticles.useInfiniteQuery(
    {
      limit: 6,
      variant: filter.toLowerCase().replace("this ", "") as
        | "week"
        | "month"
        | "any"
        | "year",
    },
    {
      enabled: slug === undefined ? true : slug.includes("articles-following"),
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  const trendingArticles = useMemo(
    () => data?.pages.flatMap((page) => page.posts),
    [data]
  );

  const followingArticles = useMemo(
    () => followingData?.pages.flatMap((page) => page.posts),
    [followingData]
  );

  const bottomRef = useRef<HTMLDivElement>(null);
  const reachedBottom = useOnScreen(bottomRef);

  useEffect(() => {
    if (reachedBottom && hasNextPage) {
      if (slug?.includes("articles-following")) {
        void followingNextPage();
        return;
      }
      void fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reachedBottom]);


  return (
    <section className="container-main my-4 min-h-[100dvh] w-full">
      <div className="mb-4 rounded-md border border-border-light bg-white px-4 py-12 dark:border-border dark:bg-primary md:px-6">
        <h1 className="mb-4 text-center text-3xl font-semibold text-gray-700 dark:text-text-secondary">
          Explore Tech articles & Tags
        </h1>
        <p className="mx-auto w-full text-center text-base font-normal text-gray-500 dark:text-text-primary md:w-10/12 lg:w-8/12">
          Everything that&apos;s… Hashnode. Explore the most popular tech
          articles from the Hashnode community. A constantly updating list of
          popular tags and the best minds in tech.
        </p>
        
<div className="list-container">
    <div className="list-item">
        <h2>Item 1</h2>
        <p>Description for Item 1 goes here.</p>
    </div>
    <div className="list-item">
        <h2>Item 2</h2>
        <p>Description for Item 2 goes here.</p>
    </div>
    <div className="list-item">
        <h2>Item 3</h2>
        <p>Description for Item 3 goes here.</p>
    </div>
    <div className="list-item">
        <h2>Item 4</h2>
        <p>Description for Item 4 goes here.</p>
    </div>
    <div className="list-item">
        <h2>Item 5</h2>
        <p>Description for Item 5 goes here.</p>
    </div>
</div>
      </div>

      <div className="overflow-hidden rounded-md border border-border-light bg-white pt-2 dark:border-border dark:bg-primary">
        <ExploreMainComponentNavigation slug={slug} />

        {
          {
            default: (
              <>
                <div className="border-b border-border-light dark:border-border">
                  <ExploreSection
                    title="Trending Tags"
                    type="TAG"
                    tagsData={{
                      data: trendingTagsData.data,
                      isLoading: trendingTagsData.isFetching,
                    }}
                    filter={filter}
                  />
                </div>

                <ExploreSection
                  title="Trending Articles"
                  type="ARTICLE"
                  articlesData={{
                    data: trendingArticles,
                    isLoading: isLoading,
                  }}
                  filter={filter}
                />
              </>
            ),
            "tags-following": (
              <ExploreSection
                title="Tags You Follow"
                type="TAG"
                tagsData={{
                  data: followingTagsData.data,
                  isLoading: followingTagsData.isFetching,
                }}
                filter={filter}
              />
            ),
            "articles-following": (
              <ExploreSection
                title="Articles You Follow"
                type="ARTICLE"
                articlesData={{
                  data: followingArticles,
                  isLoading: followingLoading,
                }}
                filter={filter}
              />
            ),
            articles: (
              <ExploreSection
                title="Trending Articles"
                type="ARTICLE"
                articlesData={{
                  data: trendingArticles,
                  isLoading: isLoading,
                }}
                setFilterState={setFilter}
                showFilter={true}
                filter={filter}
              />
            ),
            tags: (
              <ExploreSection
                title="Trending Tags"
                subtitle="Tags with most number of articles"
                type="TAG"
                tagsData={{
                  data: trendingTagsData.data,
                  isLoading: trendingTagsData.isFetching,
                }}
                setFilterState={setFilter}
                showFilter={true}
                filter={filter}
              />
            ),
          }[(slug ? slug[0] : "default") as string]
        }
        {
          isFetchingNextPage || followingIsFetchingNextPage && (
            <>
              <ArticleLoading />
              <ArticleLoading />
              <ArticleLoading />
              <ArticleLoading />
              <ArticleLoading />
              <ArticleLoading />
              <ArticleLoading />
              <ArticleLoading />
            </>
          )
        }
        <div ref={bottomRef} />
      </div>
    </section>
  );
};

export default ExploreMainComponent;

const ExploreSection: FC<{
  articlesData?: TrendingArticleTypes;
  tagsData?: TrendingTagsTypes;
  type: "TAG" | "ARTICLE";
  title: string;
  subtitle?: string;
  setFilterState?: Dispatch<
    SetStateAction<"This week" | "This month" | "This year" | "Any">
  >;
  showFilter?: boolean;
  filter?: "This week" | "This month" | "This year" | "Any";
}> = ({
  articlesData,
  tagsData,
  title,
  type,
  subtitle,
  setFilterState,
  showFilter = false,
  filter,
}) => {
    return (
      <>
        <div className="flex items-center justify-between p-4 pb-0">
          <div className="mb-2">
            <h1 className="text-xl font-semibold text-gray-700 dark:text-text-secondary">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base font-normal text-gray-500 dark:text-text-primary">
                {subtitle}
              </p>
            )}
          </div>

          {showFilter && setFilterState && (
            <div className="max-w-[350px]">
              <Select
                onChange={(value) => {
                  setFilterState(
                    value.label as "This week" | "This month" | "This year"
                  );
                }}
                defaultText="Any"
                options={[
                  {
                    label: "This week",
                    value: "week",
                  },
                  {
                    label: "This month",
                    value: "month",
                  },
                  {
                    label: "This year",
                    value: "year",
                  },
                  {
                    label: "Any",
                    value: "any",
                  },
                ]}
              />
            </div>
          )}
        </div>

        <div className="">
          <ManageData
            type={type}
            loading={type === "TAG" ? <TagLoading /> : <ArticleLoading />}
            articleData={articlesData}
            tagsData={tagsData}
            filter={filter}
          />
        </div>
      </>
    );
  };
