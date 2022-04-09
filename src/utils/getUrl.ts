export const getUrl = (url?: string) => (
                                                !/^https?:\/\//i.test(url || "")
                                        ) ? "https://" + url:url;
