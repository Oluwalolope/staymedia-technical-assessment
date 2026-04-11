import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface WPContextType {
  wpData: any;
  posts: any[];
  loading: boolean;
  error: string | null;
}

const WordPressContext = createContext<WPContextType | undefined>(undefined);

export function WPProvider({ children }: { children: ReactNode }) {
  const [wpData, setWpData] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const pageResponse = await fetch('https://subsidized-tapir-620a7d.instawp.site/wp-json/wp/v2/pages?slug=home&acf_format=standard');
        
        const postsResponse = await fetch('https://subsidized-tapir-620a7d.instawp.site/wp-json/wp/v2/posts?_embed');

        if (!pageResponse.ok || !postsResponse.ok) throw new Error('Failed to fetch data from WordPress');

        const pageData = await pageResponse.json();
        const postsData = await postsResponse.json();

        setWpData(pageData[0]); 
        setPosts(postsData); 
        setLoading(false);
      } catch (err) {
        console.error('Error fetching WordPress data:', err);
        setError('Failed to load content');
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <WordPressContext.Provider value={{ wpData, posts, loading, error }}>
      {children}
    </WordPressContext.Provider>
  );
}

export function useWordPress() {
  const context = useContext(WordPressContext);
  if (context === undefined) {
    throw new Error('useWordPress must be used within a WPProvider');
  }
  return context;
}