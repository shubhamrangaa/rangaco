import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  content: string;
  relatedPosts: {
    title: string;
    description: string;
    href: string;
  }[];
}

interface BlogTemplateProps {
  post: BlogPost;
}

export default function BlogTemplate({ post }: BlogTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Blog Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="w-20 h-1 bg-green-600 mb-8"></div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* See Also Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">See Also</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {relatedPost.description}
                  </p>
                  <a
                    href={relatedPost.href}
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Professional Tax Help?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Get expert assistance with your tax filing, GST compliance, and
              financial planning. Our team of experienced professionals is here
              to help you stay compliant and save money.
            </p>
            <Button variant="secondary" icon="phone">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
