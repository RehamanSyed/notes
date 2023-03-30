import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
